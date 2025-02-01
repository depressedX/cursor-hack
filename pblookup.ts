import {
  EnumType,
  FieldList,
  Message,
  MessageType,
  proto3,
  ScalarType,
  ServiceType,
} from "@bufbuild/protobuf";
import { dirname } from "path";

import { importAmd, isAmdResult } from "./pblookup_global_hook.js";

import "./proto-dist/proto/aiserver/v1/admin_connectweb.js";
import { globSync } from "glob";
import { ensureDirSync } from "fs-extra";
import { writeFileSync, existsSync } from "fs";

const files = globSync("./proto-dist/proto/aiserver/v1/*.js");

interface EnumObject {
  [key: number]: string;

  [k: string]: number | string;
}
function isProtoMessageClass(obj: unknown): obj is MessageType {
  return typeof obj === "function" && Message.isPrototypeOf(obj);
}

function isProtoEnumObject(obj: unknown): obj is EnumObject {
  try {
    proto3.getEnumType(obj as any);
    return true;
  } catch (e) {
    return false;
  }
}

function isEnumType(obj: unknown): obj is EnumType {
  return Boolean(
    typeof obj === "object" &&
      obj &&
      ["typeName", "values", "findName", "findNumber"].every((k) => k in obj)
  );
}

function getMessageName(message: MessageType | EnumType, packageName: string) {
  const PACKAGE_PREFIX = packageName + ".";

  if (!message.typeName.startsWith(PACKAGE_PREFIX)) {
    throw new Error(
      "message not in scope : " +
        message.typeName +
        "   expected prefix: " +
        PACKAGE_PREFIX
    );
  }
  return message.typeName.slice(PACKAGE_PREFIX.length);
}

/**
 * aiserver.v1.Diagnostic.RelatedInformation aiserver.v1.Diagnostic -> RelatedInformation
 * aiserver.v1.Diagnostic.RelatedInformation aiserver.v1.LinterError -> Diagnostic.RelatedInformation
 * @param target
 * @param base
 * @returns
 */
function relatedMessageTypeName(
  target: MessageType | EnumType,
  base: MessageType | EnumType
) {
  const targetPath = target.typeName.split(".");
  const basePath = base.typeName.split(".");
  for (let i = 0; i < targetPath.length; i++) {
    if (targetPath[i] !== basePath[i]) {
      return targetPath.slice(i).join(".");
    }
  }
  return target.typeName;
}

const scalarTypeLabelMap: Record<ScalarType, string> = Object.fromEntries(
  Object.entries(ScalarType).map(([k, v]) => [v, k.toLowerCase()])
) as any;

function renderMessageBody(
  message: MessageType,
  {
    scopedMessages,
  }: {
    scopedMessages: (MessageType | EnumObject)[];
  }
) {
  const fields: string[] = [];
  // const scopedDeclarationSet: Set<MessageType | EnumType> = new Set();
  for (const field of message.fields.list()) {
    if (field.kind === "map") {
      const labelKey = scalarTypeLabelMap[field.K];
      const labelValue =
        field.V.kind === "scalar"
          ? scalarTypeLabelMap[field.V.T]
          : field.V.kind === "enum"
          ? relatedMessageTypeName(field.V.T, message)
          : relatedMessageTypeName(field.V.T, message);

      fields.push(
        `  ${field.opt ? "optional " : ""}map<${labelKey}, ${labelValue}> ${
          field.name
        } = ${field.no};`
      );
      continue;
    }
    let label = "_unknown_";
    if (field.kind === "scalar") {
      label = scalarTypeLabelMap[field.T];
    } else if (field.kind === "enum") {
      label = relatedMessageTypeName(field.T, message);
    } else if (field.kind === "message") {
      label = relatedMessageTypeName(field.T, message);
    } else {
      throw new Error("Unknown field kind: " + field);
    }
    fields.push(
      `  ${field.opt ? "optional " : ""}${label} ${field.name} = ${field.no};`
    );
  }

  const scopedDeclarations = renderMessages(
    [...scopedMessages],
    message.typeName
  )
    .split("\n")
    .map((v) => "  " + v)
    .join("\n");
  return [...fields, scopedDeclarations].join("\n");
}

function renderMessages(pbDef: unknown[], packageName: string) {
  const declarations: string[] = [];

  for (const entity of pbDef) {
    if (isProtoMessageClass(entity)) {
      if (getMessageName(entity, packageName).includes(".")) {
        // 说明是本包的message 会在其嵌套的里面输出
        // TODO: 如何确保一定会输出
        continue;
      }
      const protoDef = `
message ${getMessageName(entity, packageName)} {
${renderMessageBody(entity, {
  scopedMessages: pbDef
    .filter<MessageType | EnumObject>(
      (v) => isProtoMessageClass(v) || isProtoEnumObject(v)
    )
    .filter((v) => {
      if (isProtoMessageClass(v)) {
        return v.typeName.startsWith(entity.typeName + ".");
      }
      if (isProtoEnumObject(v)) {
        const targetEnum = proto3.getEnumType(v);
        return targetEnum.typeName.startsWith(entity.typeName + ".");
      }
      return false;
    }),
})}
}
  `;
      declarations.push(protoDef);
    } else if (isProtoEnumObject(entity)) {
      const targetEnum = proto3.getEnumType(entity);
      if (getMessageName(targetEnum, packageName).includes(".")) {
        // 说明是本包的enum 会在其嵌套的里面输出
        // TODO: 如何确保一定会输出
        continue;
      }
      declarations.push(`
enum ${getMessageName(targetEnum, packageName)} {
  ${targetEnum.values.map((v) => `${v.name} = ${v.no};`).join("\n  ")}
}
`);
    } else if (isEnumType(entity)) {
      const targetEnum = entity;
      declarations.push(`
enum ${getMessageName(targetEnum, packageName)} {
  ${targetEnum.values.map((v) => `${v.name} = ${v.no};`).join("\n  ")}
}
`);
    } else {
      debugger;
      throw new Error("Not a proto message class or enum: " + entity);
    }
  }
  return declarations.join("\n\n");
}

function renderMethods(service: ServiceType, packageName: string) {
  return Object.values(service.methods)
    .map((method) => {
      return `  rpc ${method.name}(${getMessageName(
        method.I,
        packageName
      )}) returns (${getMessageName(method.O, packageName)});`;
    })
    .join("\n\n");
}

(async () => {
  const protoNames = Array.from(
    new Set(
      files.map((v) => {
        v = v.replace(/^.*proto-dist\//, "");
        if (v.endsWith("_connectweb.js")) {
          return v.slice(0, -"_connectweb.js".length);
        }
        if (v.endsWith("_pb.js")) {
          return v.slice(0, -"_pb.js".length);
        }
        throw new Error("Unknown proto file: " + v);
      })
    )
  );

  for (const pbName of protoNames) {
    console.log("name", pbName);

    const relatedDeps: Set<string> = new Set();
    let serviceDefBlock = "";

    const connectwebPath = "./proto-dist/" + pbName + "_connectweb.js";
    if (existsSync(connectwebPath)) {
      const connectwebResult = await importAmd(connectwebPath);
      const connectweb = connectwebResult.exports as any;
      const serviceDef = connectweb[Object.keys(connectweb)[0]] as ServiceType;
      if (!serviceDef.typeName.startsWith("aiserver.v1.")) {
        throw new Error("Not a service: " + serviceDef.typeName);
      }
      const serviceName = serviceDef.typeName.split(".")[2];

      serviceDefBlock = `
      
service ${serviceName} {

${renderMethods(serviceDef, "aiserver.v1")}
}`;
      connectwebResult.deps
        .filter((d) => isAmdResult(d.result) && d.id != pbName + "_pb")
        .map((v) => v.id)
        .forEach((v) => relatedDeps.add(v));
    }

    const pbResult = await importAmd("./proto-dist/" + pbName + "_pb.js");
    const pbExports = pbResult.exports as Record<string, unknown>;

    for (const [k, v] of Object.entries(pbExports)) {
      if (!isProtoMessageClass(v) && !isProtoEnumObject(v)) {
        throw new Error("Not a proto message class: " + k);
      }
    }
    // const deps = collectExternalDeps(pbExports);
    pbResult.deps
      .filter((d) => isAmdResult(d.result))
      .map((v) => v.id)
      .forEach((v) => relatedDeps.add(v));
    const rawProto = `
syntax = "proto3";

package aiserver.v1;

${Array.from(relatedDeps)
  .map(
    (v) =>
      `import "${v
        .replace(/^proto\/aiserver\/v1\//, "")
        .replace(/_pb$/, "")}.proto";`
  )
  .join("\n")}

// 因为还不能检测是否依赖这个 proto 文件，所以先手动 import 一下
import "google/protobuf/timestamp.proto";


${serviceDefBlock}

${renderMessages(Object.values(pbExports), "aiserver.v1")}

`;

    const outputFilepath = pbName + ".proto";
    ensureDirSync(dirname(outputFilepath));
    // console.log(rawProto);
    writeFileSync(outputFilepath, rawProto, "utf-8");
  }
})();

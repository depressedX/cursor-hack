import {
  FieldList,
  Message,
  MessageType,
  ScalarType,
} from "@bufbuild/protobuf";
import { totalExports } from "./pbdef.js";

function isProtoMessageClass(obj: object): obj is typeof Message {
  return Message.isPrototypeOf(obj);
}

const scalarTypeLabelMap: Record<ScalarType, string> = Object.fromEntries(
  Object.entries(ScalarType).map(([k, v]) => [v, k])
) as any;

function printProto(_cls: MessageType) {
  const protoElements: MessageType[] = [];

  function print(cls: MessageType) {
    console.log('handle', cls.typeName);
    
    const protoDef = `
message ${cls.typeName} {
${cls.fields
  .list()
  .map((v) => {
    const label =
      v.kind === "scalar"
        ? scalarTypeLabelMap[v.T]
        : v.kind === "enum"
        ? v.T.typeName
        : v.kind;
    return `  ${label} ${v.name} = ${v.no};`;
  })
  .join("\n")}
}
  `;
  }

  function walk(cls: MessageType) {
    protoElements.push(cls);
    const fields = cls.fields as FieldList;

    for (const field of fields.list()) {
      if (field.kind === "message") {
        // 递归收集
        if (!protoElements.some(v=>v.typeName === field.T.typeName)) {
          walk(field.T);
        }
      }
    }

  }
  walk(_cls);
  protoElements.forEach(elm => {
    print(elm);
  })
}

function lookupRecursively() {
  function walk(deps) {
    for (const depName of deps) {
      const dep = totalExports[depName];

      if (isProtoMessageClass(dep)) {
        printProto(dep as MessageType);
      } else {
        console.log("Not a message: " + dep);

        throw new Error("Not a message: " + depName);
      }
    }
  }
  walk(["$Jv", "$Mv", "$Fv", "$Gv", "$Dv", "$Ev", "$Bv", "$Cv"]);
}

lookupRecursively();

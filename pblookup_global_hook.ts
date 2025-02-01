import { de, he } from "./fileSig";
import * as BufbuildProtobuf from "@bufbuild/protobuf";

const dependencyMap: Record<string, unknown> = {
  "external/bufbuild/protobuf": BufbuildProtobuf,
};

export interface AmdResult {
  isAmd: true;
  exports: unknown;
  deps: {
    id: string;
    result: AmdResult | unknown;
  }[];
}

export function isAmdResult(result: unknown): result is AmdResult {
  return typeof result === "object" && result !== null && "isAmd" in result;
}

const definedModules: Record<string, Promise<AmdResult>> = {};

globalThis.define = (moduleName, deps: string[], factory) => {
  // console.log("defineModule:", moduleName);
  if (definedModules[moduleName] instanceof Promise) {
    return;
  }

  definedModules[moduleName] = (async () => {
    const moduleExports = {};
    const restDeps: AmdResult["deps"] = [];
    for (const dep of deps.slice(2)) {
      if (dependencyMap[dep]) {
        restDeps.push({
          id: dep,
          result: dependencyMap[dep],
        });
      } else if (dep.startsWith("proto/")) {
        const depContent = await importAmd("./proto-dist/" + dep + ".js");
        restDeps.push({
          id: dep,
          result: depContent,
        });
      } else {
        throw new Error(`Unknown dependency: ${dep}`);
      }
    }
    factory(
      null,
      moduleExports,
      ...restDeps.map((d) =>
        isAmdResult(d.result) ? d.result.exports : d.result
      )
    );
    return {
      exports: moduleExports,
      deps: restDeps,
      isAmd: true,
    };
  })();
};

globalThis.de = de;
globalThis.he = he;

export async function importAmd(path: string): Promise<AmdResult> {
  let moduleId = path.slice(path.indexOf("proto/"));
  if (moduleId.endsWith(".js")) {
    moduleId = moduleId.slice(0, moduleId.indexOf(".js"));
  }
  await import(path);
  const moduleExportsP = definedModules[moduleId];
  if (!moduleExportsP) {
    throw new Error(`Module ${moduleId} not found`);
  }
  const moduleResult = await moduleExportsP;
  return moduleResult;
}

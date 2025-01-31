import { readFileSync, writeFileSync } from "fs";
import { de } from "./fileSig";
import { dirname, join, relative } from "path";
import { ensureDirSync } from "fs-extra";

const raw = readFileSync("./workbench.desktop.main.formatted.js", "utf8");

const REG = /define\(\s*de\[(\d+)\],[\s\t]*he\((\[[^\]]+\])\)/g;

function moduleId2Filepath(id: number): string {
  return de[id] + ".js";
}

let res = REG.exec(raw);
while (res) {
  console.log(res[1], de[res[1]]);

  const filepath = moduleId2Filepath(Number(res[1]));

  const deps = eval(res[2]) as number[];

  const importStatements = deps.map((id) => {
    const path = moduleId2Filepath(id);

    let relativePath = relative(dirname(filepath), path);
    if (!relativePath.startsWith(".")) {
      relativePath = "./" + relativePath;
    }

    return `import '${relativePath}';`;
  });

  const position = res.index;

  const nextRes = REG.exec(raw);
  const tailPosition = nextRes ? nextRes.index : raw.length;
  let fileContent = raw.slice(position, tailPosition);

  if (fileContent.endsWith(",\n\t\t")) {
    fileContent = fileContent.replace(/,\n\t\t$/, "\n");
  }

  // 对 fileContent 处理, 为形参添加注释
  const FUNCTION_REG = /function \(([^\(]*)\)/g;
  const functionParameters = FUNCTION_REG.exec(fileContent)?.[1];
  if (functionParameters) {
    const functionParametersStart = fileContent.indexOf(functionParameters);
    const functionParametersEnd =
      functionParametersStart + functionParameters.length;
    const params = functionParameters
      .split(",")
      .map((paramStr, i) => {
        if (!paramStr.trim()) {
          return "";
        }
        const depSig = de[deps[i]];

        const shortDepSig = depSig.slice(depSig.lastIndexOf("/") + 1);
        let res = `${paramStr} /*${shortDepSig}*/`;
        if (res.startsWith("\n")) {
          res = res.slice(1);
        }
        return res;
      })
      .join(",\n");
    fileContent =
      fileContent.slice(0, functionParametersStart) +
      params +
      fileContent.slice(functionParametersEnd);
  }

  fileContent = importStatements.join("\n") + "\n" + fileContent;

  const finalPath = join("./directory", filepath);
  const dir = dirname(finalPath);
  ensureDirSync(dir);

  console.log("write file", filepath);
  writeFileSync(finalPath, fileContent, "utf-8");

  res = nextRes;
}

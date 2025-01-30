import { readFileSync, writeFileSync } from "fs";
import { Pe } from "./extensionHostProcess.fileSignature";
import { dirname, join, relative } from "path";
import { ensureDirSync } from "fs-extra";

const raw = readFileSync("./extensionHostProcess.formatted.js", "utf8");

const REG = /define\(\s*Pe\[(\d+)\],[\s\t]*Ne\((\[[^\]]+\])/g;

function moduleId2Filepath(id: number): string {
  return Pe[id] + ".js";
}

let res = REG.exec(raw);
while (res) {
  console.log(res[1], Pe[res[1]]);

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

  fileContent = importStatements.join("\n") + "\n" + fileContent;

  const finalPath = join("./directory", filepath);
  const dir = dirname(finalPath);
  ensureDirSync(dir);

  console.log("write file", filepath);
  writeFileSync(finalPath, fileContent, "utf-8");

  res = nextRes;
}

import { readFileSync, writeFileSync } from "fs";
import {de  } from "./fileSig";
import { dirname, join } from "path";
import { ensureDirSync } from "fs-extra";

const raw = readFileSync('./workbench.desktop.main.formatted.js', 'utf8');

console.log('ok');

const REG = /define\(\s*de\[(\d+)\],[\s\t]*he\((\[[^\]]+\])/g;



let res = REG.exec(raw);
while (res) {
    // console.log(res[1], de[res[1]]);
    // console.log(res[2]);

    const filepath = de[res[1]] + '.js'  
    
    const position = res.index
    
    const nextRes = REG.exec(raw);
    const tailPosition = nextRes ? nextRes.index : raw.length;
    const fileContent = raw.slice(position, tailPosition)

    join('./directory', filepath)


    const finalPath = join('./directory', filepath)
    const dir = dirname(finalPath)
    ensureDirSync(dir)

    console.log('write file', filepath);
    writeFileSync(finalPath, fileContent, 'utf-8');
    

    res = nextRes

}
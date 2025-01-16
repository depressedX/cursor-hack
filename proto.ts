import * as zlib from "zlib";
import { promisify } from "util";
import { readFileSync } from "fs";
import { de } from "./fileSig";

const gzip = promisify(zlib.gzip);
const gunzip = promisify(zlib.gunzip);
const brotliCompress = promisify(zlib.brotliCompress);
const brotliDecompress = promisify(zlib.brotliDecompress);

const data = readFileSync("./assets/RecordCppFate");

// gunzip(data, {
//   maxOutputLength: 0xffffffff,
// }).then((res) => {
//   console.log("get R", new TextDecoder().decode(res));
// });

// brotliDecompress(data, {
//   maxOutputLength: 0xffffffff,
// }).then((res) => {
//   console.log("get R", new TextDecoder().decode(res));
// });

// de[340] 的依赖 connect/index.ts
// console.log([de[2995],de[285],de[1286],de[226],de[401],de[118], de[3944],de[1931],de[1931],de[1054],de[1072],de[4265],de[4332],de[4364]].join('\n'));

console.log(`de[285]${de[285]}的依赖`);

// de[285] 的依赖
console.log([
    de[332],
    de[3628],
]);

console.log(`de[1978]${de[1978]}的依赖`);

console.log([
    
]);


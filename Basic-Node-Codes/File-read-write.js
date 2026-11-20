const fs = require("fs");

//Blocking,Synchronus way of reading and writing file
const textIn = fs.readFileSync("./text/sample.txt", "utf-8");
console.log(textIn);

const textOut = `writing file : ${textIn}. \n created on ${Date.now()}`;
fs.writeFileSync("./text/output.txt", textOut);
console.log("File Write Complete");

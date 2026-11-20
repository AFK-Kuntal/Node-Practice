const fs = require("fs");

//Blocking,Synchronus way of reading and writing file
const textIn = fs.readFileSync("./text/sample.txt", "utf-8");
console.log(textIn);

const textOut = `writing file : ${textIn}. \n created on ${Date.now()}`;
fs.writeFileSync("./text/output.txt", textOut);
console.log("File Write Complete");

// non-Blocking or Asynchronus way of reading and writing Files
// In Node we can achieve Asynchronus version by using callbacks but that sometime leads to callback hell
fs.readFile("./text/samplee.txt", "utf-8", (err, data1) => {
  if (err) console.log(err.message);
  console.log(data1);
  fs.readFile(`./text/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.writeFile(
      "./text/final.txt",
      `${data1} \n ${data2}`,
      "utf-8",
      (err, data) => {
        console.log("Success");
      },
    );
  });
});
console.log("Pending");

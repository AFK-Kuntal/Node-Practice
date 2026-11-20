// creating server and routing
const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
const productData = JSON.parse(data);
console.log(data);
console.log(typeof data);
console.log(typeof productData);
//as this top level code will only run once the code runs so running it synchronusly will not effect code execution and also if we write all of this inside the function then everytime a requests come we have to read the file. but in this case we are only reading the file once

const server = http.createServer((req, res) => {
  //   console.log(req);
  const path = req.url;
  console.log(path);

  if (path === "/") res.end("HomePage");
  else if (path === "/overview") res.end("Overview of the Page");
  else if (path === "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-header": "custom header",
    });
    // res.end('Page Not Found')
    res.end("<h1>Page Not Found</h1>");
    //as the content type is text/html so we can pass html here.also my-header can be used to send some metadata here
  }
});

const PORT = 8000;
server.listen(PORT, "127.0.0.1", () => {
  console.log(`Listening requests on port ${PORT}`);
}); //by default it will be on localhost.127.0.0.1 is the url of localhost and we don't have to mention it explicitly

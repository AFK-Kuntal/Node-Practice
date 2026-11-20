// creating server and routing
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  //   console.log(req);
  const path = req.url;
  console.log(path);

  if (path === "/") res.end("HomePage");
  else if (path === "/overview") res.end("Overview of the Page");
  else {
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

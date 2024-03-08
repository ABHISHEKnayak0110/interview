const http = require("http")

 const server = http.createServer(function (request, response) {
     response.writeHead(200, {'Content-Type': 'text/HTML'});
    response.end("<h1>hello world</h1>");
  });
  server.listen((3111), () => {
    console.log("Server is Running");
})
  
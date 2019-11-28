
let port = 80;
let wifi = require("Wifi");
var http = require('http');

function processRequest (req, res) {
  console.log(req);
  res.writeHead(200);
  res.end('Hello!');
}

http.createServer(processRequest).listen(port);
console.log(`Web server running at http://${wifi.getIP().ip}:${port}`)

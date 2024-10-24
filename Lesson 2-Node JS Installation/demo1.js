var http = require('http');

http.createServer(function (req, res) {
  res.write("Hello World! This is Ahsanul Mostakin");
  res.end();
}).listen(8081);
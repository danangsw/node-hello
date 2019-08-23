var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<H4>Hello World,</H4><P>Greeting from NodeJS</P>');
}).listen(3000, "0.0.0.0");
console.log('Server running at http://0.0.0.0:3000/');

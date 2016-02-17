const http = require('http');

http.createServer( (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<h1>Hello World</h1>');	
  response.end('<p1>This is a node app!\n</p1>');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
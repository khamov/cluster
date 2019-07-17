var http = require('http');
const server = http.createServer(function (req, resp) {
    console.log('it works');
    resp.writeHead(200, {'Content-Type': 'text/html'});
    resp.end('<h1>Hello!</h1>');
});

server.listen(8080);
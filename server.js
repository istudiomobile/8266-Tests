var http = require('http');
var querystring = require('querystring');

var port = process.env.PORT || 1337;
var server = http.createServer().listen(port);

server.on('request', function (req, res) {
    if (req.method == 'POST') {
        var body = '';
    }

    req.on('data', function (data) {
        body += data;
    });

    req.on('end', function () {
        var post = querystring.parse(body);
        console.log(post);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
    });
});

console.log('Listening on port 1337');
// http is native to Nodejs. We just have to ask for it rather than npm install http
const http = require('http');

// http module has a createServer method takes 1 arg:
// 1. callback, has 2 args: request , response
const server = http.createServer(( req, res ) => {
    if( req.url === '/' ) {
        // http message consist of:
        // 1. Start line - done by http itself check
        // 2. header
        // 3. body

        res.writeHead(200,{'content-type': 'text/html'});
        res.write('<h1>Hello World!</h1>');
        res.end();
    } else {
        res.writeHead(404,{'content-type': 'text/html'});
        res.write('<h1>Sorry! Wrong page</h1>');
        res.end();
    }
});

//CreateServer returns an object with a listen method
// listen takes 1 arg:
// 1. port to listen for http traffic on
server.listen(3000);
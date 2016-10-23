/**
 * Created by lfalcao on 21/10/2016.
 */

'use strict';

const PORT = 3500;
var http = require('http');
var url = require('url');

let html = `
    <html>
        <head>
            <title>Sample page</title>
        </head>
        <body>
            <h1>SLB</h1>
        </body>
    </html>
`;



let server = http.createServer(processRequest);
//http.on('request', processRequest);

server.listen(PORT, () => console.log("Listening on port " + PORT));



function processRequest(req, rsp) {
    // console.log(req.headers);
    // console.log(req.httpVersion);
    console.log(req.url);
    let u = url.parse(req.uri);


    //rsp.setHeader("Content-Type", "text/html");

    rsp.end(html);
}

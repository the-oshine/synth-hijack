const http = require('http');
const fs = require('fs');

// create server + load html page
const server = http.createServer((req, res) => {
    console.log(req.url , req.method);

    // send Synth Hijack html page
    let path = './views/synth-hijack.html';
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.statusCode = 404;
            res.end('That route was not found.');
        } else {
            res.statusCode = 200;
            res.end(data); // run data and end response
        }
    });

});

// server listen on port 3000
server.listen(3000, 'localhost', () => {
    console.log('port 3000 open and listening');
});


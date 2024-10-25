const http = require('http');

const server = http.createServer((req, res) => {
    const start = Date.now();
    while (Date.now() - start < 2000) {}
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

setTimeout(() => {
    console.log('This is a non-blocking task executed after 1 second');
}, 1000);


console.log('Server started. Waiting for requests...');

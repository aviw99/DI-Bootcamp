const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello from the server')
})

server.listen(8000, () => {
    console.log('run on 8000');
})
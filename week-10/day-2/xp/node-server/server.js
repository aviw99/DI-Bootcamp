const http = require('http');

const port = 8080;

const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(user));
})

server.listen(port, () => {
    console.log('server running')
})
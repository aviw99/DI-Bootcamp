const {largeNumber} = require('./main');
const {dateTime} = require('./main');
const http = require('http');

const dateStr = 'The date and time are currently: ' + dateTime();

const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hi there at the frontend</h1>');
    res.write(`<h3>${dateStr}</h3>`)
    res.end(`<p>my module is <br>${b + largeNumber}</p>`);

})

server.listen(port, () => {
    console.log("I'm listening")
})

const b = 5;

console.log(b + largeNumber);

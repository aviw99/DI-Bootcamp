const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>This is my first response</h1>");
    res.write("<h1>This is my second response</h1>");
    res.write("<p>This is my third response</p>");

})

server.listen(port, () => {
    console.log("Server running")
})

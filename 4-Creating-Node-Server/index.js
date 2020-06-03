const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req)
    res.end('Hello from the server')
});

server.listen(8000, () => {
    console.log('listening on port 8000')
})
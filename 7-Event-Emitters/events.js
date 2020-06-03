const EventEmitter = require('events')
const http = require('http')
class Sales extends EventEmitter {
    constructor(){
        super()

    }
}
const myEmitter = new Sales();

myEmitter.on('newSale', () => {
    console.log('There was a new sale!')
})

myEmitter.on('newSale', () => {
    console.log('Costumer name: John')
})

myEmitter.on('newSale', stock => {
    console.log(`There are now ${stock} items left in stock`)
})

// Oberserver Pattern
myEmitter.emit('newSale', 9);

///////////////////////////////////////////////
const server = http.createServer()

server.on('request', (req, res) => {
    console.log('Requested received');
    res.end('Request received')
})

server.on("request", (req, res) => {
  console.log("Second Requested received");
  res.end("Second Request received");
});
server.on('close', () => {
    console.log('Server closed')
})


server.listen(8000, () => console.log('Waiting for requests...'))
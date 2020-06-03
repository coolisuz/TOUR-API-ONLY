/*
    Used to process (read and write) data piece by piece(chunks), 
    without completing the whole read or write operation, and 
    therefore without keeping all the data in memory
    Netflix, Youtube examples
*/

// Perfect for handling large volumes of data
// More efficient data processing in terms of memory 

const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res) => {
    // Solution 1 //////////////////////////////////
    // fs.readFile('test-file.txt', 'utf-8', (err, data) => {
    //     res.end(data)
    // })

    // Solution 2 ///////////////////////////////////
    // const readable = fs.createReadStream('test-file.txt')
    // readable.on('data', chunk => {
    //     res.write(chunk);
    // })
    // readable.on('end', () => {
    //     res.end()
    // })

    // readable.on('error', err => {
    //     console.log(err)
    //     res.statusCode = 500;
    //     res.end('File not found')
    // })

    // Solution 3  ///////////////////////////////////
    const readable = fs.createReadStream('test-file.txt')
    readable.pipe(res)  
    // readableSoure.pipe(writableDestination)
})

server.listen(8000, () => {
    console.log('Server listening on port 8000')
})
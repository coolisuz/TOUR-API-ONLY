const fs = require('fs')



// its is typical in node to pass err as the first arg
fs.readFile('./txt/start.txt', 'utf-8', (err,data) => {
    console.log(data) // logs third since its asynchronous not blocking the code
})

console.log('will read file!') // logs first
// for(let i=0; i<100; i++){
//     console.log(i) //second
// }

const data = "Hello world"
fs.writeFile('./txt/msg.pdf', data, (err) => {
    if (err) throw err
    console.log('File has been saved')
})
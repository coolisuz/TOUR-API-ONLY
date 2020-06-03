const fs = require('fs')

////////////////////////////////// SYNCHRONOUS ////////////////////////////////

/*
 BLOCKING: SYNCHRONOUS
    Each line executed line by line. 
    And Each line blocks the rest of the code to execute
*/
const input = fs.readFileSync('input.txt', 'utf-8')
console.log(input)

///////////////////// ASYNCHRONOUS ////////////////////////////////////////////

// NON-BLOCKING: ASYNCHRONOUS
fs.readFile('input.txt', 'utf-8', (err, data) => {
    console.log(data) // second
})

// that logs out first because we are off-loading al the heavy work calculations 
// to later time until it finishes executing.  
console.log('Reading file...') //first
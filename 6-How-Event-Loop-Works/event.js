const fs  = require('fs')
const crypto = require('crypto')

const start = Date.now()
// process.env.UV_THREADPOOL_SIZE = 4


setTimeout(() => console.log('Time 1 expired'), 0)
setImmediate(() => console.log('Immediate 1  finished'))

fs.readFile("text.txt", "utf-8", (err, data) => {
    console.log("i/o finished");
    console.log('-------------------------')

    setTimeout(() => console.log('Time 2 expired'), 0)
    setTimeout(() => console.log("Time 3 expired"), 3000);
    setImmediate(() => console.log('Immediate 2 finished'))
    
    process.nextTick(() => console.log('process.nextTick()'))

    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start + ': password encrypted')
    });

    crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512", () => {
      console.log(Date.now() - start + ": password encrypted");
    });
    crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512", () => {
      console.log(Date.now() - start + ": password encrypted");
    });
    crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512", () => {
      console.log(Date.now() - start + ": password encrypted");
    });
    
});


console.log('hello from top level code')
const fs = require('fs') //file system module available off the box in node

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(textIn)

const textOut = `This is what we know about writing to files: ${textIn}\nCreated on ${Date.now()}`
fs.writeFileSync('./txt/output.txt', textOut)
console.log('File written')


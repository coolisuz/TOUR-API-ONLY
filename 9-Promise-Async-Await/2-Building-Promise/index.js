const fs = require("fs");
const superagent = require("superagent");

const readFilePromise = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if(err) reject('File not found')
            resolve(data)
        })
    })
}

const writeFilePromise = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if(err) reject('Could not save')
            resolve('success')
        })
    })
}


readFilePromise(`${__dirname}/dog.txt`)
    .then(data => {
        return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
    })
    .then(res => {
        console.log(res.body.message)

        return writeFilePromise(`${__dirname}/dog-img.txt`, res.body.message)
    })

    .then(() => console.log('link has been saved successfully'))
    .catch(err => console.log(err.message))

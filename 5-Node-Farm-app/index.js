const fs = require('fs')
const http = require('http')


const replaceTemplate = (temp, product) => {
    
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName)
    output = output.replace(/{%IMAGE%}/g, product.image)
    output = output.replace(/{%PRICE%}/g, product.price)
    output = output.replace(/{%FROM%}/g, product.from)
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients)
    output = output.replace(/{%QUANTITY%}/g, product.quantity)
    output = output.replace(/{%DESCRIPTION%}/g, product.description)
    output = output.replace(/{%ID%}/g, product.id)

    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic')
    return output
}

// That is top level code which is going to run only once.
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`)
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`)
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`)
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`)
const dataObj = JSON.parse(data)


const server = http.createServer((req, res) => {
    const path = req.url

    // Overview
    if(path === '/overview' || path === '/'){
        res.writeHead(200, { 'Content-type': 'text/html'})
        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el))
        console.log(cardsHtml)
        res.end(tempOverview)
    }

    // Product
    else if(path === '/product'){
        res.end('Product')

    // API        
    } else if(path === '/api'){
        res.writeHead(200, { 'Content-type': 'application/json'})
        res.end(data)
        
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            "myOwnHeader": 'testing'
        })
        res.end('<h1>Page not found</h1>')
    }
    
})

server.listen(8000, () => {
    console.log('listening on port 8000')
})
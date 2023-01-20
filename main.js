const { response } = require('express');
const express = require('express');
const { resolve } = require('path');
const app = express();

const port = 8000;

valamiVan = () => {
    console.log(`A szerver elindult ${port}`)
}

app.listen(port, valamiVan)


app.get('/', (request, response) => {
    console.log(`Mégegy hívás ${request.url}`)
    response.send (`
    <html>
    <head>
        <title>Vissza a tervhez</title>
    </head>
    <body>
        <h1>Vissza az igazi tervhez</h1>
        <p>Hellóka</p>
        <a href="./about">Rólam</a>
    </body>
    </html>
    `)
})

app.get('/about', (request, response) => {
    console.log(`Mégegy hívás ${request.url}`)
    response.send (`
    <html>
    <head>
        <title>Vissza a tervhez</title>
    </head>
    <body>
        <h1>Vissza az igazi tervhez</h1>
        <p>Hellóka</p>
        <a href="/">Vissza</a>
    </body>
    </html>
    `)
})
const { response } = require('express');
const express = require('express');
const { resolve } = require('path');
const app = express();

/* Ezzel elérhetővé teszem a küldö html, css elemeket */
app.use(express.static('public'))

/*  */

const port = 8000;

valamiVan = () => {
    console.log(`A szerver elindult ${port}`)
}

app.listen(port, valamiVan)

const materials = [
    {
        id: 1,
        name: "Twin system ",
        farbe: "Schwarzblau"
    },
    {
        id: 2,
        name: "Twin system ",
        farbe: "Rot"
    },
    {
        id: 3,
        name: "Twin system ",
        farbe: "Gold"
    },
]

app.get('/about/materials', (request, response) => {
    console.log(`Mégegy hívás ${request.url}`)
    response.send (materials)
});

app.get('/about/materials/:id', (request, response) => {
    const id = Number.parseInt(request.params.id, 20)
    const kereses = materials.find((material) => material.id === id)
    if (kereses === 'undefined') {
        response.sendError(404)
    } else {
        response.send(kereses)
    }
});
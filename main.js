const { response } = require('express');
const express = require('express');
const { request } = require('http');
const { resolve } = require('path');
const app = express();

/* Ezzel elérhetővé teszem a küldö html, css elemeket */
app.use(express.static('public'))

/* Ezzel küldöm be a JSON failokat anélkül, hogy elkellene végeznem valamiféle beállításokat */
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const port = 8000;

valamiVan = () => {
    console.log(`A szerver elindult ${port}`)
}

app.listen(port, valamiVan)

const materials = [
    {
        id: 1,
        name: "Twin system ",
        color: "Schwarzblau",
        quantity: 120
    },
    {
        id: 2,
        name: "Twin system ",
        color: "Rot",
        quantity: 120
    },
    {
        id: 3,
        name: "Twin system ",
        color: "Gold",
        quantity: 120
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

app.post('/about/materials/new', (request, response) => {
    materials.push({
        id: materials.length +1,
        name: request.body.name,
        color: request.body.color,
        quantity: request.body.quantity
    });
});


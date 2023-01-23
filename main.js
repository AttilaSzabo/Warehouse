const express = require('express');
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

const palladion = [
    {
        id: 1,
        name: "Twin system ",
        color: "Schwarzblau",
        colorCode: 125,
        quantity: 120
    },
    {
        id: 2,
        name: "Twin system ",
        color: "Rot",
        colorCode: 125,
        quantity: 120
    },
    {
        id: 3,
        name: "Twin system ",
        color: "Gold",
        colorCode: 125,
        quantity: 120
    },
]

const Linditex = []

app.get('/about/materials', (request, response) => {
    console.log(`Mégegy hívás ${request.url}`)
    response.send (palladion)
});

app.get('/about/materials/:id', (request, response) => {
    const id = Number.parseInt(request.params.id, 20)
    const kereses = palladion.find((material) => material.id === id)
    if (kereses === 'undefined') {
        response.sendError(404)
    } else {
        response.send(kereses)
    }
});

app.post('/about/materials/new', (request, response) => {
    let name = request.body.name
    let color = request.body.color
    let colorCode = request.body.colorCode
    let quantity = request.body.quantity
    let valasztas = request.body.valasztas
    
    if (name = "" || color == "" || colorCode =="" || quantity == "") {
    } else if (valasztas.value = "valasztas") {
    } else {
        palladion.push({
            id: palladion.length +1,
            name: request.body.name,
            color: request.body.color,
            colorCode: request.body.colorCode,
            quantity: request.body.quantity
        });
    };
});
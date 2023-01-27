const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port)

let materials = [
    {
        id: 1,
        customer: "Linditex",
        type: "Méteráru",
        material: "Lukas Pro 65% Polyeszter 35% Bavlna",
        color: "Piros",
        colorCode: "210",
        materialWidth: "148",
        quantity: "80"
    },
    {
        id: 1,
        customer: "Linditex",
        type: "Egyébb anyagok",
        material: "Reflexpás",
        color: "ezüst",
        colorCode: "210",
        materialWidth: "50",
        quantity: "80"
    },
    {
        id: 1,
        customer: "Palladion",
        type: "Méteráru",
        material: "Twyn system 50% valami 50% valami",
        color: "Schwarzblau",
        colorCode: "1250",
        materialWidth: "157",
        quantity: "250"
    },
    {
        id: 1,
        customer: "Palladion",
        type: "Egyébb anyagok",
        material: "Reflexstreife",
        color: "Schwarz",
        colorCode: "1250",
        materialWidth: "30",
        quantity: "30"
    },
]

let id = 1;

app.get('/api/materials', (req, res) => {
    res.send(materials)
})


app.post('/api/materials/new', (req, res) => {
    materials.push({
        id: id,
        customer: req.body.customer,
        type: req.body.type,
        material: req.body.material,
        color: req.body.color,
        colorCode: req.body.colorCode,
        materialWidth: req.body.materialWidth,
        quantity: req.body.quantity
    });
    id +=1;
    res.send({send: true})
})
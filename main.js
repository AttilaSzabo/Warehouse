const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port)

let materials = [
]

let id = 1;

app.get('/api/materials', (req, res) => {
    res.send(materials)
})

app.post('/api/materials/new', (req, res) => {
    let customer = req.body.customer;

    if (customer.toLowerCase() !== "linditex" && customer.toLowerCase() !== "palladion") {
        res.send({nemjó: "Nemjó"})
    } else {
        materials.push({
            id: id,
            customer: req.body.customer,
            material: req.body.material,
            color: req.body.color,
            colorCode: req.body.colorCode,
            quantity: req.body.quantity
        });
    }
    id +=1;
})
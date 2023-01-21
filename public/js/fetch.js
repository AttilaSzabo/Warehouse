fetch('http://localhost:8000/about/materials')
    .then(data => data.json())
    .then(materials => {
        const materialsItem =
            materials
                .map(material => `
                    <td> ${JSON.stringify(material.name)}</td>
                    <td>${JSON.stringify(material.color)}</td>
                    <td> ${JSON.stringify(material.quantity)}e</td>
                `)
                .join('')

            document.querySelector('.palladion__materials')
                .innerHTML = materialsItem;
    })
    .catch(console.error)
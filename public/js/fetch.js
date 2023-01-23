fetch('http://localhost:8000/about/materials')
    .then(data => data.json())
    .then(data => {
        if (data.length > 0) {
            let template = ""
            
            data.forEach((u) => {
                template += "<tr>"
                template += "<td>" + u.id + ";" + "</td>"
                template += "<td>" + u.name + "</td>"
                template += "<td>" + u.color + "</td>"
                template += "<td>" + u.colorCode + "</td>"
                template += "<td>" + Number(u.quantity).toFixed(2) + " " + "meter" +  "</td></tr>"
            })

            document.getElementById('palladion__materials').innerHTML = template
        }
    })
    .catch(console.error)

let select = document.querySelectorAll('.select__box')
let button = document.querySelectorAll('.button')

button.addEventListener('click', () => {
    alert("hello")
})

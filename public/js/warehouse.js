
fetch('http://localhost:8080/api/materials')
.then(data => data.json())
    .then(data => {
        
        data.forEach((u) => {
                let template = ""
                if (u.customer === "Linditex") {
                    if (u.type === "Méteráru") {
                        template += "<tr>"
                        template += "<td>" + u.id + ";" + "</td>"
                        template += "<td>" + u.customer + "</td>"
                        template += "<td>" + u.material + "</td>"
                        template += "<td>" + u.color + "</td>"
                        template += "<td>" + u.colorCode + "</td>"
                        template += "<td>" + Number(u.materialWidth).toFixed(2) + " " + "cm" + "</td>"
                        template += "<td>" + Number(u.quantity).toFixed(2) + " " + "meter" +  "</td></tr>"
                        document.getElementById('lindi__anyagok__js').innerHTML += template
                    } else if (u.type === "Egyébb anyagok") {
                        template += "<tr>"
                        template += "<td>" + u.id + ";" + "</td>"
                        template += "<td>" + u.customer + "</td>"
                        template += "<td>" + u.material + "</td>"
                        template += "<td>" + u.color + "</td>"
                        template += "<td>" + u.colorCode + "</td>"
                        template += "<td>" + Number(u.materialWidth).toFixed(2) + " " + "cm" + "</td>"
                        template += "<td>" + Number(u.quantity).toFixed(2) + " " + "meter" +  "</td></tr>"
                        document.getElementById('lindi__egyebbAnyagok__js').innerHTML += template
                    }
                }
                if (u.customer === "Palladion") {
                    if (u.type === "Méteráru") {
                        template += "<tr>"
                        template += "<td>" + u.id + ";" + "</td>"
                        template += "<td>" + u.customer + "</td>"
                        template += "<td>" + u.material + "</td>"
                        template += "<td>" + u.color + "</td>"
                        template += "<td>" + u.colorCode + "</td>"
                        template += "<td>" + Number(u.materialWidth).toFixed(2) + " " + "cm" + "</td>"
                        template += "<td>" + Number(u.quantity).toFixed(2) + " " + "meter" +  "</td></tr>"
                        document.getElementById('palladion__anyagok__js').innerHTML += template
                    } else if (u.type === "Egyébb anyagok") {
                        template += "<tr>"
                        template += "<td>" + u.id + ";" + "</td>"
                        template += "<td>" + u.customer + "</td>"
                        template += "<td>" + u.material + "</td>"
                        template += "<td>" + u.color + "</td>"
                        template += "<td>" + u.colorCode + "</td>"
                        template += "<td>" + Number(u.materialWidth).toFixed(2) + " " + "cm" + "</td>"
                        template += "<td>" + Number(u.quantity).toFixed(2) + " " + "meter" +  "</td></tr>"
                        document.getElementById('palladion__egyebbAnyagok__js').innerHTML += template
                    }
                }
            })
    })

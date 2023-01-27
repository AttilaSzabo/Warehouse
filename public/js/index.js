let customerOption = document.querySelector('.customer_option_js')
let materialsOption = document.querySelector('.material_option_js')
let customerPushing = document.querySelector('.customer__pushing_js');
let materialPushing = document.querySelector('.material_pushing_js');

let submitButton = document.querySelector('.submit_button_js');

customerOption.addEventListener('click', () => {
    pushingValue (customerOption, customerPushing, "customer")
});

materialsOption.addEventListener('click', () => {
    pushingValue (materialsOption, materialPushing, "material")
});

submitButton.addEventListener('click', () => {
    if (customerPushing.value === "" || materialPushing.value === "") {
        alert("Ki kell töltened a felső két mezőt")
    }
})


function pushingValue (value, name, valami) {
    Array(value).forEach((e) => {
        if (e.value === valami) {
            name.value = ""
        } else {
            console.log(e.value)
            name.value = ""
            name.value = e.value
        }
       });
}
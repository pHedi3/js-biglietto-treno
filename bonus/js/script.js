alert('inserici i dati per sapere il prezzo del biglietto');
var age = prompt('quando sei nato?');
var km = prompt('quanti chilometri vuoi fare?');
var d = new Date();

age = d.getFullYear() -  parseInt(age)

if (parseInt(age) < 18) {
    var discount = 20;
} else if (parseInt(age) > 65) {
    var discount = 40;
} else {
    var discount = 0;
}

var price = (km * 0.21) * ((100 - discount) / 100);

document.getElementById('price').innerHTML = price.toFixed(2) + '€'
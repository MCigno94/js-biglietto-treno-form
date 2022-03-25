// prezzo al km
const kmRate = 0.21;

// Chiedere il nome del passeggero
const yourName = prompt("Qual è il tuo nome?");
document.querySelector(".yourName").value = yourName;

// Chiedere il numero di km da pecorrere
const kmTraveled = parseInt(prompt("Quanti km vuoi percorrere?"));
document.querySelector(".kmTraveled").value = kmTraveled;
// Chiedere l'età del passeggero
const yourAge = parseInt(prompt("Inserisci l'età"));
// impostare tariffa in € per il chilometraggio
const kmPrice = kmTraveled * kmRate;

// tariffa del biglietto
let ticketPrice = 0;
let message = "";
// applico uno sconto del 20% se minorenne
const priceMinors = kmPrice * 0.8;
// applico uno sconto del 40% se over65
const priceOver65 = kmPrice * 0.6;



// - impostare i limiti della variabile "kmTraveled" - nessuna stringa e nessun numero minore di 0
if (kmTraveled < 0 || isNaN(kmTraveled)) {
    alert("Riprova, scelta non disponibile");
}
// - impostare i limiti della variabile "yourAge" - nessuna stringa e nessun numero minore di 0
if (yourAge < 0 || yourAge > 100 || isNaN(yourAge)) {
    alert("Riprova, scelta non disponibile");
}

// impostare sconti in base all'età
if (yourAge < 18) {
    // applico uno sconto del 20% se minorenne
    ticketPrice = priceMinors;
    message = "minorenne";
    document.querySelector(".form-select").value = 1;
} else if (yourAge >= 65) {
    // applico uno sconto del 40% se over65
    ticketPrice = priceOver65;
    message = "over65";
    document.querySelector(".form-select").value = 3;
} else {
    // prezzo pieno
    ticketPrice = kmPrice;
    message = "maggiorenne";
    document.querySelector(".form-select").value = 2;
}

// inserisco dati nel biglietto
document.querySelector(".fullName").innerHTML = yourName;

document.querySelector(".ageSelect").innerHTML = message;

document.querySelector(".ticketPrice").innerHTML = ticketPrice.toFixed(2) + "€";

document.querySelector(".carriage").innerHTML = Math.floor((Math.random() * 10) + 1);

document.querySelector(".codeCP").innerHTML = Math.floor((Math.random() * 99999) + 10001);

// genera biglietto
const elementTicketMain = document.querySelector('.ticketMain');
const elementGeneraButton = document.querySelector('.genera');
const elementAnnullaButton = document.querySelector('.annulla');

elementGeneraButton.addEventListener('click', function() {
    elementTicketMain.classList.remove('ticketOff');
});
elementAnnullaButton.addEventListener('click', function() {
    elementTicketMain.classList.add('ticketOff');
});
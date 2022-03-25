// prezzo al km
const kmRate = 0.21;

// Chiedere il nome del passeggero
const yourName = parseInt(prompt("Qual è il tuo nome?"));
// Chiedere il numero di km da pecorrere
const kmTraveled = parseInt(prompt("Quanti km vuoi percorrere?"));
// Chiedere l'età del passeggero
const yourAge = parseInt(prompt("Quanti anni hai?"));
// impostare tariffa in € per il chilometraggio
const kmPrice = kmTraveled * kmRate;

// tariffa del biglietto
let ticketPrice = "";
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
} else if (yourAge >= 65) {
    // applico uno sconto del 40% se over65
    ticketPrice = priceOver65;
} else {
    // prezzo pieno
    ticketPrice = kmPrice;
}

//document.getElementById("ticket_price").innerHTML = ticketPrice.toFixed(2) + "€";
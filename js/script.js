// FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// COSTANTI
const PRICE_KM = 0.21;

// ELEMENTI DOM
const createTicketFormElm = document.getElementById("create-ticket-form");
const fullNameFieldElm = document.getElementById("full-name");
const kmFieldElm = document.getElementById("km");
const ageFieldElm = document.getElementById("age");
const btnResetElm = document.getElementById("btn-reset");

const ticketElm = document.getElementById("ticket");
const ticketNameElm = document.getElementById("ticket-name");
const ticketOffertElm = document.getElementById("ticket-offert");
const ticketTrainCarElm = document.getElementById("train-car");
const ticketCpCodeElm = document.getElementById("cp-code");
const ticketPriceElm = document.getElementById("ticket-price");

// EVENTI DOM
createTicketFormElm.addEventListener("submit", function (e) {
    // Impedisce il refresh della pagina
    e.preventDefault();

    const km = Number(kmFieldElm.value);
    const age = ageFieldElm.value;
    let ticketPrice = km * PRICE_KM;
    let ticketOffert = "Biglietto Standard";

    if (age === "under") {
        ticketPrice *= 0.8;
        ticketOffert = "Tariffa Young";
    } else if (age === "over") {
        ticketPrice *= 0.6;
        ticketOffert = "Tariffa Senior";
    }

    ticketPrice = Number(ticketPrice.toFixed(2));

    // Stampa i dettagli del biglietto
    ticketNameElm.innerHTML = fullNameFieldElm.value;
    ticketOffertElm.innerHTML = ticketOffert;
    ticketTrainCarElm.innerHTML = getRndInteger(1, 10);
    ticketCpCodeElm.innerHTML = getRndInteger(90000, 99999);
    ticketPriceElm.innerHTML = ticketPrice + "€";

    // Mostra il biglietto
    ticketElm.classList.remove("d-none");
});

btnResetElm.addEventListener("click", function () {
    // Nasconde il biglietto
    ticketElm.classList.add("d-none");
});
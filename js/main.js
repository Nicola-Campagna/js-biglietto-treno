// TRACCIA:
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// Il prezzo del biglietto è definito in base ai km (0.21 € al km).
// Va applicato uno sconto del 20% per i minorenni.
// Va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// PASSAGGI

// CHIEDERE n.km che si desidera percorrere ed età passeggero
const numberKm = prompt("Quanti km si desidera percorrere?");
const agePerson = prompt("Quanti anni hai?");
const infoTicket = (numberKm + "km " + agePerson + "anni");
console.log(infoTicket);
document.getElementById("infoTicket").innerHTML = infoTicket

// costo biglietto = 0.21£ * km tot della tratta scelta
const costXkm = 0.21;
const costTicket = (numberKm * costXkm.toFixed(2));


if (agePerson < 17) {
    // costo biglietto per minori
    const costTicket = ((numberKm * costXkm.toFixed(2)) * 20 / 100);
    console.log(costTicket.toFixed(2) + " euro");
    document.getElementById("costTicket").innerHTML = (costTicket.toFixed(2) + "euro");
}
// 
else if (agePerson > 65) {
    // costo biglietto per over 65
    const costTicket = ((numberKm * costXkm.toFixed(2)) * 40 / 100);
    console.log(costTicket.toFixed(2) + " euro");
    document.getElementById("costTicket").innerHTML = (costTicket.toFixed(2) + "euro");

}
// persone maggiorenni inferiore ai 65anni
else {
    console.log(costTicket.toFixed(2) + " euro")
    document.getElementById("costTicket").innerHTML = (costTicket.toFixed(2) + " euro");


}


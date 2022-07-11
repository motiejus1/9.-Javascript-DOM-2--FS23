"use strict";

// 1. Sukurkite funkciją, kurią iškvietus, masyvą galima papildyti norimu elementu.
// Informacija paimama iš input laukelio. Funkcija iškviečiama paspaudus mygtuką.


let masyvas = [];

function masyvoPildymas() {
    let elementas;
    elementas = document.querySelector("#elementas").value;

    masyvas.push(elementas);
    // console.log(masyvas);
    document.querySelector("#rezultatas").innerHTML = masyvas;

}

document.querySelector("#prideti").addEventListener("click", masyvoPildymas);
/*Zadatak 5
Napravite pomoću while petlje rješenje za primjer bacanja kocke dok ne dobijemo 6. Znači ne znamo
kada ćemo prekinuti loop.
Pomoć: Kada koristimo Math.random to će biti broj između 0 i 1, doslovno decimalni broj stoga morate
tome doskočiti. Kako bi maknuli decimalu pišemo Math.trunc ili Math.floor. */


"use strict";

let rezultat;

let bacanje = 0;

while (rezultat !== 6) {
    rezultat = Math.floor(Math.random() * 6) + 1;
    bacanje++;
}

console.log("Potrebno je " + bacanje + " bacanja da bi dobili 6.");

"use strict";

/*Zadatak 2
Idemo opet do Marka i Josipa i njihovog ITM-a.
Ovaj put idemo koristiti objekte kako bi implementirali kalkulacije.
Zapamtite: ITM = masa/visina ** 2

Za svakog od njih, kreiraj objekt sa vrijednostima : ime, težina, visina.
Kreiraj calcITM metodu na svakom objektu koja će izračunati ITM (ista metoda na oba).

Spremi ITM izračun u vrijednost objekta i vrati ga iz metode (return) ime

logiraj u konzolu tko ima viši ITM, skupa sa imenom i ITM vrijednosti

NPR: Josipov ITM (28.3) je veći od Markovog (23.9)!

Test data:
Marko : 78 kg i 1.69 cm
Josip : 92 kg i 1.95 cm */


const marko = {
    ime: "Marko",
    tezina: 78,
    visina: 1.69,
    izracun: function(){
        this.ITM = this.tezina / this.visina ** 2;
        return this.ITM;
    }
};

const josip = {
  ime: "Josip",
  tezina: 92,
  visina: 1.95,
  izracun: function () {
    this.ITM = this.tezina / this.visina ** 2;
    return this.ITM;
  },
};

marko.izracun();
josip.izracun();

if (marko.izracun > josip.izracun){
    console.log(`Markov ITM (${marko.ITM}) je veći od Josipovog ${josip.ITM}`);
}else if (marko.izracun < josip.izracun) {
  console.log(`Josipov ITM (${josip.ITM}) je veći od Markovog ${marko.ITM}`);
} else {
  console.log(`Jednaki su.`);
}




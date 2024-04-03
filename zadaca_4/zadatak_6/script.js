"use strict";

/* Zadatak 6
Idemo opet nazad do Jože i njegovog kalkulatora napojnice. U njegovoj zemlji uobičajeno je
dati 15% za napojnicu ako je račun između 50 i 300. Ako je vrijednost drugačija onda je
napojnica 20%..

1) napravi listu racuni koja sadrži 10 vrijednosti između 1 i 400.

2) napravi prazne liste za napojnice i totale (racun + napojnica)

3)Vaš zadatak je izračunati napojnicu ovisno o veličini računa.Ovo smo već izračunali,
koristimo istu funkciju koju smo koristili zadnji put.
Onda upotrijebite for petlju kako bi napravili 10 kalkulacija.

tip: pozovite napojnica varijablu iz točke 3 unutar petlje i upotrijebite push metodu kako
bi dodali vrijednosti napojnici i ukupnim listama.

savjet : prvo zbrojite sve vrijednosti u listi.
Za dio sa zbrajanjem krenite sa kreiranjem varijable sum koja kreće sa početnom vrijednosti 0.
U svakoj iteraciji dodajte trenutnu vrijednost liste u sum varijablu.

savjet 2 : za izračun prosjeka, podijelite sumu koju ste dobili sa brojem članova liste.

savjet 3 : pozovite funkciju sa (racun + napojnica) listom */

const racuni = [];
for (let i = 0; i < 10; i++){
    racuni.push(Math.floor(Math.random() * 400) + 1);
}

console.log(racuni);

const racun = (racun) => {
  if (racun >= 50 && racun <= 300) {
    return racun * 0.15;
  } else {
    return racun * 0.2;
  }
};


const napojnice = [];
const ukupno = [];
for (let i = 0; i < racuni.length; i++) {
    const napojnica = racun(racuni[i]);
    napojnice.push(napojnica);
    ukupno.push(racuni[i] + napojnica)
}

let sum = 0;

for (let i = 0; i < ukupno.length; i++) {
    sum = sum + ukupno[i];
}

const prosjek = sum / ukupno.length;

console.log("Napojnice:", napojnice);
console.log("Ukupno:", ukupno);
console.log("Prosjek:", prosjek.toFixed(2));









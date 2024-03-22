/*Na svijetu ima 10000 profesionalnih igrača stolnog tenisa. Hrvatska ima 10,
Kina 3441 i USA 332. Izračunajte postotak tih igrača u odnosu na sve profesionalne igrače
i onda ih i ispišite, na način da definirate dvije funkcije, prvu koja će računati postotak
i drugu u koju ćemo ubaciti taj postotak i koja će imati 2 parametra - zemlja i populacija.
Nakon toga ispišite sve 3 vrijednosti koristeći rečenicu:
`${zemlja} ima ${populacija} lovaca što je oko ${postotak}% svijeta`* */
"use strict";

const ukupnoIgraca = 10000;
const hrvatska = 10;
const kina = 3441;
const usa = 332;

function postotak(populacijaDrzave, ukupnoIgraca) {
  return (populacijaDrzave / ukupnoIgraca) * 100;
}

function ispis(zemlja, populacija, postotak){
    console.log(`${zemlja} ima ${populacija} igrača što je oko ${postotak}% svijeta`);
}

const postotakHrv = postotak(hrvatska, ukupnoIgraca);
const postotakKina = postotak(kina, ukupnoIgraca);
const postotakUsa = postotak(usa, ukupnoIgraca);

ispis("Hrvatska", hrvatska, postotakHrv);
ispis("Kina", kina, postotakKina);
ispis("USA", usa, postotakUsa);



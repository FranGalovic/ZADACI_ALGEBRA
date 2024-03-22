/*Imamo 2 tima, koji su igrali međusobno 6 puta i svaki ima po 3 pobjede.
Želimo izračunati prosjek golova u svih 6 utakmica za svaku ekipu koristeći arrow funkciju.
Tim pobjeđuje jedino ako ima u prosjeku više golova od drugog tima.
Napravite arrow funkciju kako bi napravili kalkulaciju prosjeka.
Napravite funkciju koja uzima prosjek ekipa i ispisuje pobjednika u konzoli skupa
sa ispisom prosjeka golova obje ekipe npr. Real je u prosjeku zabio 4 gola, a Barcelona 1.
Možete iskoristi if-else petlju kako bi složili ispis.

primjer:
Barca : 2, 3, 3, 3, 4, 1
Real : 1, 4, 1, 5, 0, 5 */

"use strict";

const tim1golovi = [2, 3, 3, 3, 4, 1];
const tim2golovi = [1, 4, 1, 5, 0, 5];


const prosjekGolova = (golovi) => {
    const ukupnoGolovi = golovi.reduce((acc, cur) => acc + cur, 0);
    return ukupnoGolovi / golovi.length;
}

const ispis = (tim1, tim2, tim1golovi, tim2golovi) => {
    const tim1prosjek = prosjekGolova(tim1golovi);
    const tim2prosjek = prosjekGolova(tim2golovi);

    if(tim1prosjek > tim2prosjek){
        console.log(`${tim1} je zabio prosječno ${tim1prosjek} golova, a ${tim2} prosječno ${tim2prosjek}, prvi tim je pobjednik`);
    }else if(tim1prosjek < tim2prosjek){
        console.log(
          `${tim2} je zabio prosječno ${tim2prosjek} golova, a ${tim1} prosječno ${tim1prosjek}, drugi tim je pobjednik`);
    }else{
        console.log(`Izjednačeno je`);
    }   
}

ispis("Real", "Barca", tim1golovi, tim2golovi);


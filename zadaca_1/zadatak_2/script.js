const markoMasa = 78;
const markoVisina = 1.69;

const josipMasa = 92;
const josipVisina = 1.95;


const itmMarko = markoMasa / markoVisina ** 2;
const itmJosip = josipMasa / josipVisina ** 2;

console.log(`Marko ITM: ${itmMarko}
Josip ITM: ${itmJosip}`);


console.log("Da li je Markov ITM veći od Josipovog ITM-a?", itmMarko > itmJosip);





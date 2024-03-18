const markoVisina = 1.69;
const markoTezina = 78;

const josipVisina = 1.95;
const josipTezina = 92;

const markoITM = markoTezina/markoVisina ** 2;
const josipITM = josipTezina/josipVisina ** 2;


console.log(markoITM);
console.log(josipITM);



if(markoITM > josipITM){
    console.log(`Marko ima veći ITM od Josipa.`);
}else{
    console.log(`Josip ima veći ITM od Marka.`);
}
"use strict";

/*Napravite listu imena (do 5 komada), neka jedno ime bude vaše ime. napravite for petlju koja će kada
naleti na vaše ime ispisati "Ime je super" dok će ostala imena samo ispisat.*/

const imena = ["Marko", "Josip", "Fran", "Mateo", "Borna"];

for (let i = 0; i < imena.length; i++) {
       if(imena[i] === "Fran"){
        console.log("Ime je super");
       }else{
        console.log(imena[i]);
       }
}




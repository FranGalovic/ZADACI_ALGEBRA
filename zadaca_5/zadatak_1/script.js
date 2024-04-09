/*Imamo listu ljudi. Iz te liste koristeći map metodu prođite kroz sve članove liste, kreirajte za svakog od
njih karticu (div element) koji će sadržavati vrijednosti polja „name“ i „age“ iz liste.
Tu map metodu pozovi koristeći Event listener koji koristi click event. Taj click event složi na neki HTML
element koji kreirate po volji u vašem HTML fileu.*/

"use strict";

let data = [
  {
    name: "Marko",
    age: "30",
  },
  {
    name: "Luka",
    age: "32",
  },
  {
    name: "Ivan",
    age: "24",
  },
  {
    name: "Stjepan",
    age: "33",
  },
  {
    name: "Domagoj",
    age: "22",
  },
  {
    name: "Kristijan",
    age: "25",
  },
];

function stvoriKartice() {
  const container = document.getElementById("kartice");

  data.map((osoba) => {
    const kartica = document.createElement("div");
    kartica.classList.add("kartice");
    kartica.innerHTML = `<h2>Ime: ${osoba.name}</h2>
                       <p>Godine: ${osoba.age}</p>`;
    container.appendChild(kartica);
  });
}

document.getElementById("kreiraj-kartice").addEventListener("click",stvoriKartice);


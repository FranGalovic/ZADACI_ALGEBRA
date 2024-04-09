/*Zadatak 2
Kreiraj Event listener koji će ciljati gumb koji kreirate u HTML dokumentu.
Kao event postavite klik a u funkciji definirajte listu boja i složite izmjenu pozadinske boje body elementa
koristeći tu listu na način da svaki klik gumba za pozadinsku boju bodya postavi idućeg člana liste boja.
Bonus zadatak: osmislite rješenje kako se prebaciti na prvog člana liste kada dođete kraja liste.
Primjer liste boja:
const boje = ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"]; */

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const boje = ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"];
  let index = 0;

  function promijeniBoju() {
    document.body.style.backgroundColor = boje[index];
    index = (index + 1) % boje.length;
  }

  document.getElementById("promijeni-boju").addEventListener("click", promijeniBoju);
});



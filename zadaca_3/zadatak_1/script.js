/* Recimo da imamo 7900 lovaca u Hrvatskoj. Izračunaj koji postotak tih lovaca
dolazi iz Središnje hrvatske - nazovimo const brojLovaca1 (3840 lovaca),
koliko iz Istre (brojLovaca2 = 500 lovaca) i koliko iz Dalmacije (brojLovaca3 = 1440 lovaca) */
"use strict";

const brojLovaca1 = 3840;
const brojLovaca2 = 500;
const brojLovaca3 = 1440;

const postotakSH = 3840 / (3840 + 500 + 1440) * 100;
const postotakI = 500 / (3840 + 500 + 1440) * 100;
const postotakD = 1440 / (3840 + 500 + 1440) * 100;

console.log(
  `${postotakSH.toFixed(2)}% lovaca dolazi iz Središnje Hrvatske, ${postotakI.toFixed(2)}% dolazi iz Istre, a 
  ${postotakD.toFixed(2)}% dolazi iz Dalmacije. `);




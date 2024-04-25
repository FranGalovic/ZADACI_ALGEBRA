"use strict";

const input = document.getElementById("input");
const ucitavanje = document.getElementById("ucitavanje");
const rezultatiLista = document.getElementById("rezultati");

let timeoutId = null;

async function traziPjesme(term) {
  try {
    const response = await fetch(`https://itunes.apple.com/search?term=${term}&entity=song`);
    const data = await response.json();

    if (data.results.length > 0) {
      prikazRezultata(data.results);
    } else {
      rezultatiLista.innerHTML = "<p>Nema rezultata.</p>";
    }

    ucitavanje.style.display = "none";
  } catch (error) {
    console.error("Greška kod dohvaćanja podataka:", error);
    rezultatiLista.innerHTML = "<p>Greška kod dohvaćanja podataka.</p>";
    ucitavanje.style.display = "none";
  }
}

input.addEventListener("input", function (e) {
  const unos = e.target.value.trim();

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  ucitavanje.style.display = "block";

  timeoutId = setTimeout(() => {
    if (unos !== "") {
      traziPjesme(unos);
    } else {
      rezultatiLista.innerHTML = "";
      ucitavanje.style.display = "none";
    }
  }, 500);
});



function prikazRezultata(rezultati) {
  let html = "<ul>";
  rezultati.forEach((pjesma) => {
    html += `<li>${pjesma.artistName} - ${pjesma.trackName}</li>`;
  });
  html += "</ul>";
  rezultatiLista.innerHTML = html;
}




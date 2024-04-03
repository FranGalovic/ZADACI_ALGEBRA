"use strict";

/* Zadatak 3
Imamo objekt album. Napravi novi objekt (noviAlbum) i dodaj ga na u prvi objekt kao drugog člana liste
(ali isto kao objekt).

const album = [
{
umjetnik: "Metallica",
naslov: "Master of Puppets",
godina: 1986,
format: ["CD", "8T", "LP"],
},
];

const noviAlbum = {
umjetnik: "Bob Marley",
naslov: "Live!",
godina: 1975,

format: ["8T", "LP"],
}; */


const album = [
  {
    umjetnik: "Metallica",
    naslov: "Master of Puppets",
    godina: 1986,
    format: ["CD", "8T", "LP"],
  },
];

const noviAlbum = {
  umjetnik: "Bob Marley",
  naslov: "Live!",
  godina: 1975,

  format: ["8T", "LP"],
}; 

album.push(noviAlbum);

console.log(album);


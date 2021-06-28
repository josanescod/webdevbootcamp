//const fs = require("fs");
//const superhero = require ("superhero-name-library");
const superheroes = require("superheroes");
const supervillains = require("supervillains");

let mySuperheroName = superheroes.random();
let superVillain = supervillains.random();

console.log(mySuperheroName);
console.log(superVillain);
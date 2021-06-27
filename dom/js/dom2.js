/*
Separation of concerns: Structure, Style and Behaviour;
html, css, js
*/

let clickMe = document.querySelector(".btn");
console.log(clickMe.classList);
clickMe.classList.add("invisible");//classList.remove("invisible");toggle etc...
console.log(clickMe.classList);
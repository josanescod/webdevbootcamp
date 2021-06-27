
//selecting HTML elements with Javascript

/*let liElements = document.getElementsByTagName('li');
console.log(liElements[0]);
let button = document.getElementsByClassName('btn');
console.log(button);
let list = document.getElementById('title');
list.style.color = 'orange';
let title = document.querySelector('#title');
console.log(title.textContent);
let titles = document.querySelectorAll("#list .item");
console.log(titles);
document.querySelectorAll("#list .item")[1].style.color = "green";*/

let h1 = document.querySelector("h1");
document.querySelector("h1").style.color="red";
h1.style.fontSize = "5rem";
//h1.style.visibility= "hidden";

let clickMeButton = document.querySelector('.btn');
clickMeButton.style.backgroundColor = "yellow";
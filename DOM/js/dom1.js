
//selecting HTML elements with Javascript

let liElements = document.getElementsByTagName('li');
console.log(liElements[0]);

let button = document.getElementsByClassName('btn');
console.log(button);

let list = document.getElementById('title');
list.style.color = 'orange';

let title = document.querySelector('#title');
console.log(title.textContent);

let titles = document.querySelectorAll("#list .item");
console.log(titles);

document.querySelectorAll("#list .item")[1].style.color = "green";
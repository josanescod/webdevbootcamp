
let h1 = document.querySelector('h1');
/*console.log(h1.classList);
h1.classList.add("huge");
console.log(h1.classList)*/

/*let load = setTimeout(function() {
    h1.classList.remove("huge");
}, 3000);*/

let load = setInterval(function () {
    h1.classList.toggle("huge");
    console.log(h1.classList);
}, 2000);

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        clearInterval(load);
        console.log('event finished');
    }
}
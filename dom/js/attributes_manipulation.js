/* Manipulating attributes class, href, src etc... all inside the tags */

console.log(document.querySelector("a").getAttribute("href"));
document.querySelector("a").setAttribute("id", "custom_hrefs");
console.log(document.querySelector("a"));
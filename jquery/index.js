
$('h1').html("Hello World with jQuery!")
       .css("color", "blue")
       .addClass("big-title");

$('button').eq(2).css("color", "orange");

$('button').first().css("color", "green");

$('button').last().css("font-size", "0.5rem");

//manipulating text
$('h1').text("text changed");
$('button').text("don't click me");
$('button').eq(0).html('<span>click me</span>');

$("img").attr("alt", "Barcelona");
$("a").attr("href", "www.yahoo.com").text("yahoo.com");
let classNames = $("h1").attr("class");
console.log(classNames);

//add EventListeners
$("h1").click(function () {
       $("h1").css("color", "purple");
});

$("button").click(function () {
       $("h1").css("color", "yellow");
});

$("button").eq(1).click(function () {
       console.log("Click button 1");
});

$("input").keypress(function (event) {
       console.log(event.key);
});

let customText = "";
$(document).keypress(function (event) {
       $("h2").text(event.key);
       customText = customText + event.key
       console.log(customText);
       $("h3").html(customText);

});

$("h1").on("mouseenter", function () {
       $("h1").css("color", "red");
       $("h1").css("font-size", "18px");
});

$("h1").on("mouseleave", function () {
       $("h1").css("color", "green");
       $("h1").css("font-size", "35px");
});

//adding and removing elements with jQuery
$("h1").before("<button>New</button>");
$("h1").before("<button>New</button>");
$("a").prepend("<button>New2</button");
$("a").append("<button>New2</button");

//remove elements
$("#img1").on("click",function(){
       $(this).remove();
});

//animations
$("button").on("click",function(){
       //$(this).slideToggle();
       $("h1").slideUp().slideDown().animate({opacity: 0.5, marginLeft:30, marginLeft:10}).fadeOut();
});
/* colections of data */ 




let guestList = ["Ronaldo", "Paco" ,"Santiago", "Maria", "Ana"];

let guestName = prompt ("What is your name? ");

if (guestList.includes(guestName)) {
    alert ("Welcome to the party!");
}else {

    alert ("Sorry, maybe next time.");
}
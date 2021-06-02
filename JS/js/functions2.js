// Parameters and arguments

getMilk(3);


//cost of bottle 1.5€
function getMilk(money) {
  let numberOfBottles = Math.floor(money/1.5);
  
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight")
  console.log("You can buy "+ numberOfBottles + " bottles of milk.");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

function getMilk2(bottles) {
  console.log('buy ' + bottles + ' bottles of Milk');

}

//calling function getMilk3(2);

function getMilk3(bottles) {
  var cost = bottles * 1.5;
  //Do something with cost
  console.log('cost: ' + cost);
}
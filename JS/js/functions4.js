function getMilk(money, milkBottlePrice) {
    
    goToMarketPlace();
    console.log('buy ' + calcBottles(money, milkBottlePrice) + ' bottles of milk');
    returnAtHome();

    return calcChange(money, milkBottlePrice); // reaminder of this division
}

function calcBottles(startingMoney, costPerBottle) {
    let numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
    let change = startingAmount % costPerBottle;
    return change;

}

function goToMarketPlace() {
    console.log('leaveHouse');
    console.log('moveRight');
    console.log('moveRight');
    console.log('moveUp');
    console.log('moveUp');
    console.log('moveUp');
    console.log('moveUp');
    console.log('moveRight');
    console.log('moveRight');
}

function returnAtHome() {
    console.log('moveLeft');
    console.log('moveLeft');
    console.log('moveDown');
    console.log('moveDown');
    console.log('moveDown');
    console.log('moveDown');
    console.log('moveLeft');
    console.log('moveLeft');
    console.log('enterHouse');
}

console.log('Hello master, here is your ' + getMilk(4,1.5) + ' change');
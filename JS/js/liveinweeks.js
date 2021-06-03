lifeInWeeks(45);

function lifeInWeeks(age) {
    
    let finishYear = 90;

    let days;
    let weeks;
    let months;
    days = (finishYear * 365) - (age * 365);
    weeks = (finishYear * 52) - (age * 52);
    months = (finishYear * 12) - (age * 12);    

    console.log('You have '+days+' days, '+weeks+' weeks, and '+months+' months left.');

}
const buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }

});

$(".btn").click(function () {
    var userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour);
    console.log("player:", userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    console.log("index:", userClickedPattern.length - 1);
    console.log(gamePattern);
    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length - 1);

});


function checkAnswer(currentLevel) {
    console.log("computer:", gamePattern[currentLevel], " ", "player:", userClickedPattern[currentLevel]);
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $(document.body).addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];
    console.log("player:", userClickedPattern);
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log("computer:", gamePattern);
    $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $('#' + currentColour).addClass("pressed");
    setTimeout(function () {
        $('#' + currentColour).removeClass("pressed");
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}




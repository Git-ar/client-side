var stage = [null,
            null,
            null,
            null,
            null];

var circle = [null,
            null,
            null,
            null,
            null];

var timer = 300;

var canSendBall = [
true,
true,
true,
true,
true];

var BallInterval = [null,
    null,
    null,
    null,
    null];

var songArray = [
    [0,7],
    [0,5],
    [1,3],
    [2,5],
    [3,3],
    [4,1],
    [4,7],
    [2,0],
    [3,0]

];

//songArray[1][1]

// Initialize the game
window.onload = function(){
    init();
    initTimer();
}

// Initializing functions for all the balls

function init() {

    // Stage 1 Initialization 
    for(var k = 0; k < 5; k++){
        stage[k] = new createjs.Stage("can" + (k + 1));
        /*
        circle[k] = new createjs.Shape();
        circle[k].graphics.beginFill("red").drawCircle(0, 0, 30);
        circle[k].y = 0;
        circle[k].x = 96.5 / 2;
        stage[k].addChild(circle[k]); */
    }
    /*
    $(document).keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode > 48 && keycode < 54){
            if(canSendBall[keycode - 49]){
                BallInterval[keycode - 49] =  
                    setInterval(TickReturner(keycode - 49), 10);
            }
        }
    });*/
}

function TickReturner(Ind){
    return function tick(event) {
        canSendBall[Ind] = false
            if(timer > 0){
                circle[Ind].y = circle[Ind].y + 5;
                if (circle[Ind].y > stage[Ind].canvas.height) {
                    clearInterval(BallInterval[Ind]);
                    circle[Ind].y = -40;
                    canSendBall[Ind] = true; 
                }
                stage[Ind].update(event); // important!!
            }
        }
}

// Timer canvas changing 
var xPos = 300;
var timerSpeed = 500;
var ctx;

function initTimer(){
    timeCanvas = document.getElementById("statusBar");

    if(timeCanvas.getContext){
        ctx = timeCanvas.getContext("2d");
    }

    setInterval(changeTimer, timerSpeed);
    setInterval(BringBalls, 5);
}


function changeTimer(){
    ctx = document.getElementById("statusBar").getContext("2d");
    xPos--;
    timer = xPos;
    ctx.fillStyle = "#FFF";
    ctx.fillRect(xPos,0,2,200);

    if(xPos <= 0){
        clearInterval(changeTimer, 10);
        console.log("Game Ended");
    }
}

var timeToNextBall = 0;
var currentChordNumber = 0;
function BringBalls(){
    if(timeToNextBall > 0){
        timeToNextBall -= 10;
    }
    else{
        timeToNextBall = 100 * songArray[currentChordNumber % songArray.length][1];
        chord = songArray[currentChordNumber % songArray.length][0];
        console.log("Chord: " + currentChordNumber + " spec Chord: " + chord + " timeToNextBall: " + timeToNextBall);
        startBall(chord);
        currentChordNumber++;
    }
}

var currentAllocation = 0;
function allocateInterval(){
    currentAllocation = (currentAllocation + 1) % circle.length;
    return currentAllocation
}

function startBall(chord){
    //
    var ind = allocateInterval();
    circle[ind] = new createjs.Shape();
    circle[ind].graphics.beginFill("red").drawCircle(0, 0, 30);
    circle[ind].y = 0;
    circle[ind].x = 96.5 / 2;
    stage[chord].addChild(circle[ind]);
    
    BallInterval[ind] =  
        setInterval(TickReturner(ind, chord), 5);
}

function TickReturner(Ind, chord){
    return function tick(event) {
        canSendBall[Ind] = false
            if(timer > 0){
                circle[Ind].y = circle[Ind].y + 5;
                if (circle[Ind].y > stage[Ind].canvas.height) {
                    clearInterval(BallInterval[Ind]);
                    circle[Ind].y = -40;
                    canSendBall[Ind] = true; 
                }
                stage[chord].update(event); // important!!
            }
        }
}



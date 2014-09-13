var stage1, circle1,
    stage2, circle2,
    stage3, circle3,
    stage4, circle4,
    stage5, circle5;

var timer = 300;

var ball1Speed = 3;
var ball2Speed = 1;
var ball3Speed = 5;
var ball4Speed = 7;
var ball5Speed = 10;

// Initialize the game
window.onload = function(){

    init();
    initTimer();


}

// Initializing functions for all the balls

function init() {

    // Stage 1 Initialization 
    stage1 = new createjs.Stage("can1");

    circle1 = new createjs.Shape();
    circle1.graphics.beginFill("red").drawCircle(0, 0, 30);
    circle1.y = 0;
    circle1.x = 96.5 / 2;
    stage1.addChild(circle1);

    /*createjs.Ticker.on("tick", tick1);
    createjs.Ticker.setFPS(30);*/

    // Stage 2 Initialization 
    stage2 = new createjs.Stage("can2");

    circle2 = new createjs.Shape();
    circle2.graphics.beginFill("green").drawCircle(0, 0, 30);
    circle2.y = 0;
    circle2.x = 96.5 / 2;
    stage2.addChild(circle2);

    /*createjs.Ticker.on("tick", tick2);
    createjs.Ticker.setFPS(30);*/

    // Stage 3 Initialization 
    stage3 = new createjs.Stage("can3");

    circle3 = new createjs.Shape();
    circle3.graphics.beginFill("yellow").drawCircle(0, 0, 30);
    circle3.y = 0;
    circle3.x = 96.5 / 2;
    stage3.addChild(circle3);

    /*createjs.Ticker.on("tick", tick3);
    createjs.Ticker.setFPS(30);*/

    // Stage 4 Initialization 
    stage4 = new createjs.Stage("can4");

    circle4 = new createjs.Shape();
    circle4.graphics.beginFill("blue").drawCircle(0, 0, 30);
    circle4.y = 0;
    circle4.x = 96.5 / 2;
    stage4.addChild(circle4);

    /*createjs.Ticker.on("tick", tick4);
    createjs.Ticker.setFPS(30);*/
    
    // Stage 5 Initialization 
    stage5 = new createjs.Stage("can5");

    circle5 = new createjs.Shape();
    circle5.graphics.beginFill("orange").drawCircle(0, 0, 30);
    circle5.y = 0;
    circle5.x = 96.5 / 2;
    stage5.addChild(circle5);

    /*createjs.Ticker.on("tick", tick5);
    createjs.Ticker.setFPS(30);*/

    $(document).keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        switch(keycode) {
            case 49: 
                tick1();
                break;
            case 50:
                tick2();
                break;
            case 51:
                tick3();
                break;
            case 52:
                tick4();
                break;
            case 53:
                tick5();
                break;
        }
    });
  
}


function tick1(event) {
    if(timer > 0){
        circle1.y = circle1.y + 5;
        if (circle1.y > stage1.canvas.height) { circle1.y = 0; }
        stage1.update(event); // important!!
    }
}

function tick2(event) {
        if(timer > 0){
        circle2.y = circle2.y + 5;
        if (circle2.y > stage1.canvas.height) { circle2.y = 0; }
        stage2.update(event); // important!!
    }
}

function tick3(event) {
    if(timer > 0){
        circle3.y = circle3.y + 5;
        if (circle3.y > stage3.canvas.height) { circle3.y = 0; }
        stage3.update(event); // important!!
    }
}

function tick4(event) {
    if(timer > 0){
        circle4.y = circle4.y + 5;
        if (circle4.y > stage4.canvas.height) { circle4.y = 0; }
        stage4.update(event); // important!!
    }
}

function tick5(event) {
    if(timer > 0){
        circle5.y = circle5.y + 5;
        if (circle5.y > stage5.canvas.height) { circle5.y = 0; }
        stage5.update(event); // important!!
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
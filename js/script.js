var stage1, circle1,
    stage2, circle2,
    stage3, circle3,
    stage4, circle4,
    stage5, circle5;

// Initialize the game
window.onload = function(){

    init();



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

    createjs.Ticker.on("tick", tick1);
    createjs.Ticker.setFPS(30);

    // Stage 2 Initialization 
    stage2 = new createjs.Stage("can2");

    circle2 = new createjs.Shape();
    circle2.graphics.beginFill("green").drawCircle(0, 0, 30);
    circle2.y = 0;
    circle2.x = 96.5 / 2;
    stage2.addChild(circle2);

    createjs.Ticker.on("tick", tick2);
    createjs.Ticker.setFPS(30);

    // Stage 3 Initialization 
    stage3 = new createjs.Stage("can3");

    circle3 = new createjs.Shape();
    circle3.graphics.beginFill("yellow").drawCircle(0, 0, 30);
    circle3.y = 0;
    circle3.x = 96.5 / 2;
    stage3.addChild(circle3);

    createjs.Ticker.on("tick", tick3);
    createjs.Ticker.setFPS(30);

    // Stage 4 Initialization 
    stage4 = new createjs.Stage("can4");

    circle4 = new createjs.Shape();
    circle4.graphics.beginFill("blue").drawCircle(0, 0, 30);
    circle4.y = 0;
    circle4.x = 96.5 / 2;
    stage4.addChild(circle4);

    createjs.Ticker.on("tick", tick4);
    createjs.Ticker.setFPS(30);
    
    // Stage 5 Initialization 
    stage5 = new createjs.Stage("can5");

    circle5 = new createjs.Shape();
    circle5.graphics.beginFill("orange").drawCircle(0, 0, 30);
    circle5.y = 0;
    circle5.x = 96.5 / 2;
    stage5.addChild(circle5);

    createjs.Ticker.on("tick", tick5);
    createjs.Ticker.setFPS(30);
  
}

function tick1(event) {
    circle1.y = circle1.y + 5;
    if (circle1.y > stage1.canvas.height) { circle1.y = 0; }
    stage1.update(event); // important!!
}

function tick2(event) {
    circle2.y = circle2.y + 5;
    if (circle2.y > stage1.canvas.height) { circle2.y = 0; }
    stage2.update(event); // important!!
}

function tick3(event) {
    circle3.y = circle3.y + 5;
    if (circle3.y > stage3.canvas.height) { circle3.y = 0; }
    stage3.update(event); // important!!
}

function tick4(event) {
    circle4.y = circle4.y + 5;
    if (circle4.y > stage4.canvas.height) { circle4.y = 0; }
    stage4.update(event); // important!!
}

function tick5(event) {
    circle5.y = circle5.y + 5;
    if (circle5.y > stage5.canvas.height) { circle5.y = 0; }
    stage5.update(event); // important!!
}
// import Example from "./scripts/example";
import Player from "./scripts/players";
import Field from "./scripts/field";
import Ball from "./scripts/ball";
// import Game from "./scripts/game";

// document.addEventListener("DOMContentLoaded", ()=> {
//    // console.log("Hello World!");
//    // const main = document.getElementById("main");
//    // new Example(main);
// }); 
const canvas = document.getElementById('canvas1'); //find the <canvas> element in the HTML
canvas.width = window.innerWidth-1;
canvas.height = window.innerHeight-101;
canvas.style.resize = 200
canvas.style.position = 'flex'
canvas.style.background = "green";
// canvas.style.top = "200px";
// canvas.style.left = "100px";
const ctx = canvas.getContext('2d');            // Conventionally, ctx defined as our 2d canvas
// ctx.rect(100,100,window.innerWidth, window.innerHeight-10)


document.addEventListener("keydown", keyDowns);
document.addEventListener("keyup", keyUps);

requestAnimationFrame(Play); //Loop gameplay

let field = new Field();
let ball = new Ball();
let player = new Player(canvas.width/10, canvas.height/2-canvas.height/10, 40, 56, 0, 2, 5);
let ai = new Player(canvas.width - canvas.width/10, canvas.height/2-canvas.height/10, 32, 48, 0, 1, 5);


function Play(){
   
   // Clear the board before making a move:
   ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
   
   field.printField();
   ball.ballLogic(player);
   player.playerLogic(ball);
   // user.printSprite.bind(user.userSprite, user.w * user.frameX, user.h * user.frameY, user.w, user.h, user.x, user.y, user.canvas.width/10, user.canvas.height/6)();

   
   
   // moveUser();   
   // print user, ai and ball:
   // printSprite(userSprite, user.w * user.frameX, user.h * user.frameY, user.w, user.h, user.x, user.y, canvas.width/10, canvas.height/6)
   // printSprite(aiSprite, ai.w * ai.frameX, ai.h * ai.frameY, ai.w, ai.h, ai.x, ai.y, canvas.width/10, canvas.height/6)
   // printBall(); 
   // moveBall();
   // aimBall();
   // if (ballPossession) {      
   //    printBallAimDots(ball.x+(vx*2), ball.y+(vy*3), 0.2, 5)        
   //    printBallAimDots(ball.x+(vx*4), ball.y+(vy*5), 0.2, 3)        
   //    printBallAimDots(ball.x+(vx*6), ball.y+(vy*7), 0.2, 1)        
   // }

   setTimeout(function(){
      // Continue playing recursively:
      requestAnimationFrame(Play); //Loop gameplay
   }, 10)
}


// let continuousD = false;
// let continuousS = false;
// let continuousW = false;

function keyDowns(){
   if (event.code ==='ArrowLeft'){
      console.log(event.code)
      player.continuousLeft = true
      // if (vx>0 && (ballPossession === true)) {         
      //    vx= -(vx);
      // }
   } else if (event.code ==='ArrowRight'){
      console.log(event.code)
      player.continuousRight = true
      // if (player.vx<0 && (ballPossession === true)) {         
      //    vx= -(vx);
      // }
   }
   if (event.code ==='ArrowDown'){
      console.log(event.code)
      player.continuousDown = true  
      // if (vy<0 && (ballPossession === true)) {         
      //    vy= -(vy);
      // }   
   } else if (event.code ==='ArrowUp'){
      console.log(event.code)
      player.continuousUp = true
      // if (vy>0 && (ballPossession === true)) {         
      //    vy = -(vy);
      // }
   }

   if (event.code ==='KeyD'){  //Kick Ball        
      player.continuousD = true;       // hold down D for strength
      ball.vx = 2;
   }
   if (event.code ==='KeyS'){          //Aim kick down
      player.continuousS = true;          
   }
   if (event.code ==='KeyW'){          //Aim kick up
      player.continuousW = true;      
   }
}

function keyUps(){
   if (event.code ==='ArrowLeft'){
      player.continuousLeft = false
      // console.log(event.code)
   } else if (event.code ==='ArrowRight'){
      player.continuousRight = false
      // console.log(event.code)
   }
   if (event.code ==='ArrowDown'){
      player.continuousDown = false
      // console.log(event.code)
   } else if (event.code ==='ArrowUp'){
      player.continuousUp = false  
      // console.log(event.code)
   }  

   if (event.code ==='KeyD'){  //Kick Ball
      player.ballPossession = false  
      ball.ballRolling = true   
      player.continuousD = false
   }
   if (event.code ==='KeyS'){  //Aim kick down
      player.continuousS = false;          
   }
   if (event.code ==='KeyW'){  //Aim kick up
      player.continuousW = false;      
   }
}

// function aimBall(){
//    if (player.continuousS && player.ballPossession){  //Aim kick down
//       if (ball.vy<15) {         
//          ball.vy++;
//          // console.log(vy);
//       }  
//    }
//    if (player.continuousW && player.ballPossession){  //Aim kick up
//       if (ball.vy>-15) {         
//          ball.vy--;
//          // console.log(vy);
//       }  
//    }
//    if (player.continuousD && player.ballPossession){  
//       if (ball.vx<15) {         
//          ball.vx++;
//          console.log(vx);
//       }  
//    }
// }

// function printBallAimDots(x, y, radius, width){
//    ctx.beginPath();
//    ctx.lineWidth = width;
//    ctx.strokeStyle = "red"
//    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//    ctx.stroke();   
// }


// User


// let user = {
//    x: canvas.width/10,
//    y: canvas.height/2-canvas.height/10,
//    W: 40,
//    H: 56,
//    FrameX: 0,
//    FrameY: 2,
//    steps: 5
// }

                        // let ai = {
                        //    x: canvas.width - canvas.width/10,
                        //    y: canvas.height/2-canvas.height/10,
                        //    W: 32,
                        //    H: 48,
                        //    FrameX: 0,
                        //    FrameY: 1,
                        //    steps: 5
                        // }

// const userSprite = new Image();
// userSprite.src = "./pics/hulk.png"; //W: 40, H: 56,
// const aiSprite = new Image();
// aiSprite.src = "./pics/deadpool.png"; //W: 32, H: 48,
// userSprite.src = "./pics/yoda.png"; //W: 32, H: 48,

// function printSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
//    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
// }

// function printUser(){   //original user board
//    ctx.fillStyle = 'red';
//    ctx.fillRect(user.x, user.y, user.w, user.w);
// }

// function moveUser(){
//    if (continuousLeft === true && user.x - user.steps > canvas.width/50){  
//       user.x -= user.steps;   // move in direction
//       user.frameY = 1;      // character frame row 1
//       userMovingPics();       // alternate pice in row
//       if (ballPossession) {      //runs to the left with ball 
//          ball.x = user.x+20;
//          ball.y = user.y+user.h+20;
//       }
//    }
//    if (continuousRight === true && user.x + user.steps < (canvas.width/2)-user.w){
//       user.x += user.steps;
//       user.frameY = 2;
//       userMovingPics();
//       if (ballPossession) {      //runs to the right with ball 
//          ball.x = user.x+user.w+10;
//          ball.y = user.y+user.h+20;
//       }
//    }
//    if (continuousDown === true && user.y + user.steps < canvas.height-user.w){
//       user.y += user.steps;
//       user.frameY = 0;
//       userMovingPics();
//       if (ballPossession) {      //runs down with ball 
//          ball.x = user.x+30;
//          ball.y = user.y+80;
//       }
//    }
//    if (continuousUp === true && user.y - user.steps > canvas.height/50){
//       user.y -= user.steps;
//       user.frameY = 3;
//       userMovingPics();
//       if (ballPossession) {      //runs up with ball 
//          ball.x = user.x+60;
//          ball.y = user.y+60;
//       }
//    }   
// }

// function userMovingPics() {   
//    if (user.frameX < 3) {
//       user.frameX++;
//    } else {
//       user.frameX = 0;
//    }
// }


// Ball
// let ball = {
//    x: user.x+user.w+10,
//    y: user.y+user.h+10,
//    radius: window.innerWidth/170,
// }
// function printBall(){
//    ctx.beginPath();
//    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
//    ctx.lineWidth = 7;
//    ctx.strokeStyle = "yellow"
//    ctx.stroke();   
//    ctx.fillStyle = "blue"
//    ctx.fill(); 
// }


// let vx = 7;
// let vy = 7;
// let ballRolling = true;
// let ballPossession = false;
// function moveBall(){
//    if (ballRolling) {      
//       ball.x += vx;
//       ball.y += vy;
//    }
//    // player takes control of ball
//    if ((ball.x <= user.x+user.w && ball.x >= user.x) && (ball.y >= user.y && ball.y <= (user.y + user.h+30))) {
//       ballRolling = false;
//       ballPossession = true;
//       vy = 0.1;
//    }
   
//    // turn around at wall left/right
//    if ((ball.x + vx <= 0) || (ball.x + vx > canvas.width-(ball.radius*2))){
//       if (vx>0) {         
//          vx = -(vx+0.2);
//       }else{
//          vx = -(vx-0.2);
//       }
//       if (vx>20 || vx<-20) { //reset ball speed
//          vx = 1;
//       }     
//       // console.log(vx);
//    }
//    // turn around at wall top/bottom
//    if ((ball.y + vy <= 0) || (ball.y + vy > canvas.height-(ball.radius*2))){
//       if (vy>0) {         
//          vy = -(vy+0.2);
//       }else{
//          vy = -(vy-0.2);
//       } 
//       if (vy>20 || vy<-20) { //reset ball speed
//          vy = 1;
//       }     
//       // console.log(vy);
//    }
// }


// print goals
// let goalLeft = {
//    x: 0,
//    y: canvas.height/3,
//    w: canvas.width/20,
//    h: canvas.height/3,
//    steps: 5
// }   
// function printgoalLeft(){
//    ctx.fillStyle = 'pink';
//    ctx.fillRect(goalLeft.x, goalLeft.y, goalLeft.w, goalLeft.h);
// }

// let goalRight = {
//    x: canvas.width-goalLeft.w,
//    y: canvas.height/3,
//    w: canvas.width/20,
//    h: canvas.height/3,
//    steps: 5
// }   
// function printgoalRight(){
//    ctx.beginPath();
//    ctx.lineWidth = 6;
//    ctx.strokeStyle = "yellow"
//    ctx.fillStyle = 'pink';
//    ctx.fillRect(goalRight.x, goalRight.y, goalRight.w, goalRight.h);
//    ctx.stroke();   
//    ctx.fill(); 
// }
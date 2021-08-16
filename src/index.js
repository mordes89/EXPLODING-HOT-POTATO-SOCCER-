// import Example from "./scripts/example";
// import users from "./scripts/user";

// document.addEventListener("DOMContentLoaded", ()=> {
//    // console.log("Hello World!");
//    // const main = document.getElementById("main");
//    // new Example(main);
// }); 
const canvas = document.querySelector('canvas'); //find the <canvas> element in the HTML
canvas.width = window.innerWidth-10;
canvas.height = window.innerHeight-100;
canvas.style.top = "200px";
canvas.style.left = "100px";
const ctx = canvas.getContext('2d');            // Conventionally, ctx defined as our 2d canvas
ctx.rect(100,100,window.innerWidth, window.innerHeight-10)


document.addEventListener("keydown", keyDowns);
document.addEventListener("keyup", keyUps);

requestAnimationFrame(play); //Loop gameplay

function play(){   
   moveUser();
   moveBall();

   // Clear the board before making a move:
   ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
   
   // Print field:
   printMidCir();
   printMidLine();
   printgoalLeft();
   printgoalRight()
   printpenBoxL();
   printpenBoxR();
   // print user and ball:
   printSprite(userSprite, user.dpW * user.dpFrameX, user.dpH * user.dpFrameY, user.dpW, user.dpH, user.x, user.y, canvas.width/10, canvas.height/6)
   printBall(); 
   // printUser();   
   setTimeout(function(){
      // Continue playing recursively:
      requestAnimationFrame(play); //Loop gameplay
   }, 25)
}


let continuousLeft = false;
let continuousRight = false;
let continuousDown = false;
let continuousUp = false;

function keyDowns(){
   if (event.code ==='ArrowLeft'){
      continuousLeft = true
      if (vx>0 && (ballPosesion === true)) {         
         vx= -(vx);
      }
      // console.log(event.code)
   } else if (event.code ==='ArrowRight'){
      continuousRight = true
      if (vx<0 && (ballPosesion === true)) {         
         vx= -(vx);
      // console.log(event.code)
      }
   }
   if (event.code ==='ArrowDown'){
      continuousDown = true  
      if (vy<0 && (ballPosesion === true)) {         
         vy= -(vy);
      }   
   } else if (event.code ==='ArrowUp'){
      continuousUp = true
      if (vy>0 && (ballPosesion === true)) {         
         vy = -(vy);
      }
   }

   if (event.code ==='KeyD'){  //Kick Ball
      ballPosesion = false  
      ballRolling = true    
      // console.log(event.code)
   }

   if (event.code ==='KeyS'){  //Aim kick down
      
   }
   if (event.code ==='KeyW'){  //Aim kick up
      
   }
}

function keyUps(){
   if (event.code ==='ArrowLeft'){
      continuousLeft = false
      // console.log(event.code)
   } else if (event.code ==='ArrowRight'){
      continuousRight = false
      // console.log(event.code)
   }
   if (event.code ==='ArrowDown'){
      continuousDown = false
      // console.log(event.code)
   } else if (event.code ==='ArrowUp'){
      continuousUp = false  
      // console.log(event.code)
   }  
}


// User
let user = {
   x: canvas.width/10,
   y: canvas.height/2-canvas.height/10,
   // w: canvas.width/50,
   // h: canvas.height/10,
   dpW: 40,
   dpH: 56,
   dpFrameX: 0,
   dpFrameY: 2,
   steps: 5
}

const userSprite = new Image();
userSprite.src = "./pics/hulk.png"; //dpW: 40, dpH: 56,
// userSprite.src = "./pics/deadpool.png"; //dpW: 32, dpH: 48,
// userSprite.src = "./pics/yoda.png"; //dpW: 32, dpH: 48,

function printSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
   ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
}

// function printUser(){
//    ctx.fillStyle = 'red';
//    ctx.fillRect(user.x, user.y, user.dpw, user.dpW);
// }
function moveUser(){
   if (continuousLeft === true && user.x - user.steps > canvas.width/50){  
      user.x -= user.steps;   // 
      user.dpFrameY = 1;
      userMovingPics();
      if (ballPosesion) {      //runs to the left with ball 
         ball.x = user.x+20;
         ball.y = user.y+user.dpH+10;
      }
   }
   if (continuousRight === true && user.x + user.steps < (canvas.width/2)-user.dpW){
      user.x += user.steps;
      user.dpFrameY = 2;
      userMovingPics();
      if (ballPosesion) {      //runs to the right with ball 
         ball.x = user.x+user.dpW+10;
         ball.y = user.y+user.dpH+10;
      }
   }
   if (continuousDown === true && user.y + user.steps < canvas.height-user.dpW){
      user.y += user.steps;
      user.dpFrameY = 0;
      userMovingPics();
      if (ballPosesion) {      //runs down with ball 
         ball.x = user.x+30;
         ball.y = user.y+70;
      }
   }
   if (continuousUp === true && user.y - user.steps > canvas.height/50){
      user.y -= user.steps;
      user.dpFrameY = 3;
      userMovingPics();
      if (ballPosesion) {      //runs up with ball 
         ball.x = user.x+80;
         ball.y = user.y+60;
      }
   }
}

function userMovingPics() {   
   if (user.dpFrameX < 3) {
      user.dpFrameX++;
   } else {
      user.dpFrameX = 0;
   }
}





// Ball
let ball = {
   x: user.x+user.dpW+10,
   y: user.y+user.dpH+10,
   radius: window.innerWidth/170,
   // vx: 1,
   // vy: 1
}
let vx = 1;
let vy = 1;
function printBall(){
   ctx.beginPath();
   ctx.lineWidth = 6;
   ctx.strokeStyle = "yellow"
   ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
   ctx.stroke();   
   ctx.fill(); 
}


let ballRolling = true;
let ballPosesion = false;
function moveBall(){
   if (ballRolling) {      
      ball.x += vx;
      ball.y += vy;
   }
   // player takes control
   if ((ball.x <= user.x+user.dpW && ball.x >= user.x - user.dpW) && (ball.y >= user.y && ball.y <= (user.y + user.dpW))) {
      ballRolling = false;
      ballPosesion = true;
   }
   
   // turn around at wall left/right
   if ((ball.x + vx <= 0) || (ball.x + vx > canvas.width-(ball.radius*2))){
      if (vx>0) {         
         vx = -(vx+0.2);
      }else{
         vx = -(vx-0.2);
      }
      if (vx>20 || vx<-20) { //reset ball speed
         vx = 1;
      }     
      // console.log(vx);
   }
   // turn around at wall top/bottom
   if ((ball.y + vy <= 0) || (ball.y + vy > canvas.height-(ball.radius*2))){
      if (vy>0) {         
         vy = -(vy+0.2);
      }else{
         vy = -(vy-0.2);
      } 
      if (vy>20 || vy<-20) { //reset ball speed
         vy = 1;
      }     
      // console.log(vy);
   }
}




// Field
let fieldMidCircle = {
   x: canvas.width/2,
   y: canvas.height/2,   
   radius: canvas.height/10,
   width: canvas.width/80
}
function printMidCir(){
   ctx.beginPath();
   ctx.lineWidth = fieldMidCircle.width;
   ctx.strokeStyle = "white"
   ctx.arc(fieldMidCircle.x, fieldMidCircle.y, fieldMidCircle.radius, 0, Math.PI * 2, false);
   ctx.stroke();   
   // ctx.fill(); 
}

let midLine = {
   x: ((canvas.width/2) - canvas.width/70/2),
   y: 0,
   w: canvas.width/70,
   h: canvas.height,
}
function printMidLine(){
   ctx.fillStyle = 'white';
   ctx.fillRect(midLine.x, midLine.y, midLine.w, midLine.h);
}

let penBoxL = {
   sBoxX: canvas.width/12,
   sBoxY: canvas.height/4,
   verticalW: canvas.width/140,
   sBoxH: canvas.height/2,

   lBoxX: canvas.width/5,
   lBoxY: canvas.height/7,
   lBoxH: canvas.height/1.4,

   sBoxTopLineX: 0,
   sBoxTopLineY: canvas.height/4,
   sBoxTopLineW: canvas.width/12,
   horizontalH: canvas.width/140,
   sBoxBottLineX: 0,
   sBoxBottLineY: canvas.height - canvas.height/4 - canvas.width/140,
   sBoxBottLineW: canvas.width/12,

   lBoxTopLineX: 0,
   lBoxTopLineY: canvas.height/7,
   lBoxTopLineW: canvas.width/5,
   lBoxBottLineX: 0,
   lBoxBottLineY: canvas.height - canvas.height/7 - canvas.width/140,
   lBoxBottLineW: canvas.width/5,
}
let penBoxLhalfCircle = {
   x: penBoxL.lBoxX,
   y: penBoxL.lBoxY*3.5,   
   radius: canvas.height/10,
   width: penBoxL.verticalW
}
function printpenBoxLhalfCircle(){
   ctx.beginPath();
   ctx.lineWidth = penBoxLhalfCircle.width;
   ctx.strokeStyle = "white"
   ctx.arc(penBoxLhalfCircle.x, penBoxLhalfCircle.y, penBoxLhalfCircle.radius, -1.5, 1.5, false);
   ctx.stroke();   
}
function printpenBoxDot(x, y, radius, width){
   ctx.beginPath();
   ctx.lineWidth = width;
   ctx.strokeStyle = "white"
   ctx.arc(x, y, radius, 0, Math.PI * 2, false);
   ctx.stroke();   
}
function printpenBoxL(){
   ctx.fillStyle = 'white';
   ctx.fillRect(penBoxL.sBoxX, penBoxL.sBoxY, penBoxL.verticalW, penBoxL.sBoxH);
   ctx.fillRect(penBoxL.lBoxX, penBoxL.lBoxY, penBoxL.verticalW, penBoxL.lBoxH);
   ctx.fillRect(penBoxL.sBoxTopLineX, penBoxL.sBoxTopLineY, penBoxL.sBoxTopLineW, penBoxL.horizontalH);
   ctx.fillRect(penBoxL.sBoxBottLineX, penBoxL.sBoxBottLineY, penBoxL.sBoxBottLineW, penBoxL.horizontalH);
   ctx.fillRect(penBoxL.lBoxTopLineX, penBoxL.lBoxTopLineY, penBoxL.lBoxTopLineW, penBoxL.horizontalH);
   ctx.fillRect(penBoxL.lBoxBottLineX, penBoxL.lBoxBottLineY, penBoxL.lBoxBottLineW, penBoxL.horizontalH);
   printpenBoxLhalfCircle();
   printpenBoxDot(penBoxL.lBoxX-30, penBoxR.lBoxY*3.5, 1, penBoxL.verticalW)
}

let penBoxR = {
   sBoxX: canvas.width - penBoxL.sBoxX,
   sBoxY: penBoxL.sBoxY,
   verticalW: penBoxL.verticalW,
   sBoxH: penBoxL.sBoxH,

   lBoxX: canvas.width - penBoxL.lBoxX,
   lBoxY: penBoxL.lBoxY,
   lBoxH: penBoxL.lBoxH,

   sBoxTopLineX: canvas.width - penBoxL.sBoxX,
   sBoxTopLineY: penBoxL.sBoxTopLineY,
   sBoxTopLineW: penBoxL.sBoxTopLineW,
   horizontalH: penBoxL.horizontalH,
   sBoxBottLineX: canvas.width - penBoxL.sBoxX,
   sBoxBottLineY: penBoxL.sBoxBottLineY,
   sBoxBottLineW: penBoxL.sBoxBottLineW,

   lBoxTopLineX: canvas.width - penBoxL.lBoxX,
   lBoxTopLineY: penBoxL.lBoxTopLineY,
   lBoxTopLineW: penBoxL.lBoxTopLineW,
   lBoxBottLineX: canvas.width - penBoxL.lBoxX,
   lBoxBottLineY: penBoxL.lBoxBottLineY,
   lBoxBottLineW: penBoxL.lBoxBottLineW,
}
let penBoxRhalfCircle = {
   x: penBoxR.lBoxX,
   y: penBoxR.lBoxY*3.5,   
   radius: canvas.height/10,
   width: penBoxL.verticalW
}
function printpenBoxRhalfCircle(){
   ctx.beginPath();
   ctx.lineWidth = penBoxRhalfCircle.width;
   ctx.strokeStyle = "white"
   ctx.arc(penBoxRhalfCircle.x, penBoxRhalfCircle.y, penBoxRhalfCircle.radius, 1.5, -1.5, false);
   ctx.stroke();   
}
// let penBoxDot = {
   // x: penBoxR.lBoxX+30,
   // y: penBoxR.lBoxY*3.5,   
   // radius: 1,
   // width: penBoxL.verticalW
// }

function printpenBoxR(){
   ctx.fillStyle = 'white';
   ctx.fillRect(penBoxR.sBoxX, penBoxR.sBoxY, penBoxR.verticalW, penBoxR.sBoxH);
   ctx.fillRect(penBoxR.lBoxX, penBoxR.lBoxY, penBoxR.verticalW, penBoxR.lBoxH);
   ctx.fillRect(penBoxR.sBoxTopLineX, penBoxR.sBoxTopLineY, penBoxR.sBoxTopLineW, penBoxR.horizontalH);
   ctx.fillRect(penBoxR.sBoxBottLineX, penBoxR.sBoxBottLineY, penBoxR.sBoxBottLineW, penBoxR.horizontalH);
   ctx.fillRect(penBoxR.lBoxTopLineX, penBoxR.lBoxTopLineY, penBoxR.lBoxTopLineW, penBoxR.horizontalH);
   ctx.fillRect(penBoxR.lBoxBottLineX, penBoxR.lBoxBottLineY, penBoxR.lBoxBottLineW, penBoxR.horizontalH);
   printpenBoxRhalfCircle();
   printpenBoxDot(penBoxR.lBoxX+30, penBoxR.lBoxY*3.5, 1, penBoxL.verticalW);
}


let goalLeft = {
   x: 0,
   y: canvas.height/3,
   w: canvas.width/20,
   h: canvas.height/3,
   steps: 5
}   
function printgoalLeft(){
   ctx.fillStyle = 'pink';
   ctx.fillRect(goalLeft.x, goalLeft.y, goalLeft.w, goalLeft.h);
}

let goalRight = {
   x: canvas.width-goalLeft.w,
   y: canvas.height/3,
   w: canvas.width/20,
   h: canvas.height/3,
   steps: 5
}   
function printgoalRight(){
   ctx.beginPath();
   ctx.lineWidth = 6;
   ctx.strokeStyle = "yellow"
   ctx.fillStyle = 'pink';
   ctx.fillRect(goalRight.x, goalRight.y, goalRight.w, goalRight.h);
   ctx.stroke();   
   ctx.fill(); 
}

// class Vector {
//    constructor(x = canvas.width/2, y = canvas.height/2){
//       this.x = x;
//       this.y = y;
//    }
// }
// class Rect{
//    constructor(w, h){
//       this.pos = new Vector;
//       this.size = new Vector(w, h)
//    }
// }

// class Ball extends Rect{
//    constructor(){
//       super(10,10);
//       this.vel = new Vector;
//    }
// }

// let ball2 = new Ball;

// function update(dt){
//    ball.pos.x += ball.vel.x * dt;
//    ball.pos.y += ball.vel.y * dt;


// }





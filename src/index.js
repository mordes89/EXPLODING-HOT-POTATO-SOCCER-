// import Example from "./scripts/example";
// import users from "./scripts/user";

// document.addEventListener("DOMContentLoaded", ()=> {
//    // console.log("Hello World!");
//    // const main = document.getElementById("main");
//    // new Example(main);
// }); 
const canvas = document.querySelector('canvas'); //find the <canvas> element in the HTML
// canvas.width = window.innerWidth-10;
// canvas.height = window.innerHeight-10;
canvas.style.top = "200px";
canvas.style.left = "100px";
const ctx = canvas.getContext('2d');            // Conventionally, ctx defined as our 2d canvas
ctx.rect(100,100,window.innerWidth, window.innerHeight-10)

requestAnimationFrame(play); //Loop gameplay

document.addEventListener("keydown", keyDowns);
document.addEventListener("keyup", keyUps);

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
   printUser();
   printBall(); 
   // ball.x += 1 


   // Continue playing:
   requestAnimationFrame(play); //Loop gameplay
}





let continuousLeft = false;
let continuousRight = false;
let continuousDown = false;
let continuousUp = false;

function keyDowns(){
   if (event.code ==='ArrowLeft'){
      continuousLeft = true      
      // console.log(event.code)
   } else if (event.code ==='ArrowRight'){
      continuousRight = true
      // console.log(event.code)
   }
   if (event.code ==='ArrowDown'){
      continuousDown = true      
      // console.log(event.code)
   } else if (event.code ==='ArrowUp'){
      continuousUp = true
      // console.log(event.code)
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
   w: canvas.width/50,
   h: canvas.height/10,
   steps: 5
}

function printUser(){
   ctx.fillStyle = 'red';
   ctx.fillRect(user.x, user.y, user.w, user.h);
}

function moveUser(){
   if (continuousLeft === true && user.x - user.steps > canvas.width/50){
      user.x -= user.steps;
   }
   if (continuousRight === true && user.x + user.steps < (canvas.width/2)-user.w){
      user.x += user.steps;
   }
   if (continuousDown === true && user.y + user.steps < canvas.height-user.h){
      user.y += user.steps;
   }
   if (continuousUp === true && user.y - user.steps > canvas.height/50){
      user.y -= user.steps;
   }
}






// Ball
let ball = {
   x: user.x+10,
   y: user.y+15,
   radius: window.innerWidth/170,
   Vx: 15,
   Vy: 15
}
function printBall(){
   ctx.beginPath();
   ctx.lineWidth = 6;
   ctx.strokeStyle = "yellow"
   ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
   ctx.stroke();   
   ctx.fill(); 
}

let ballRolling = true;

function moveBall(){
   if (ballRolling === true && ball.x - ball.Vx > canvas.width/50){
      ball.x -= ball.Vx;
   }
   if (ballRolling === true && ball.x + ball.Vx < canvas.width-ball.w){
      ball.x += ball.Vx;
   } 
   if (ballRolling === true && ball.y + ball.Vy < canvas.height-ball.h){
      ball.y += ball.Vy;
   }
   if (ballRolling === true && ball.y - ball.Vy > canvas.height/50){
      ball.y -= ball.Vy;
   }
}




// Field
let fieldMidCircle = {
   x: canvas.width/2,
   y: canvas.height/2,   
   radius: canvas.height/4,
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
   sBoxW: canvas.width/140,
   sBoxH: canvas.height/2,
   lBoxX: canvas.width/8,
   lBoxY: canvas.height/5,
   lBoxW: canvas.width/140,
   lBoxH: canvas.height/1.6,
   sBoxTopLineX: 0,
   sBoxTopLineY: canvas.height/4,
   sBoxTopLineW: canvas.width/12,
   sBoxTopLineH: canvas.width/140,
   sBoxBottLineX: 0,
   sBoxBottLineY: canvas.height - canvas.height/3.8,
   sBoxBottLineW: canvas.width/12,
   sBoxBottLineH: canvas.width/140,
   lBoxTopLineX: 0,
   lBoxTopLineY: canvas.height/5,
   lBoxTopLineW: canvas.width/8,
   lBoxTopLineH: canvas.width/140,
   lBoxBottLineX: 0,
   lBoxBottLineY: canvas.height - canvas.height/5.3,
   lBoxBottLineW: canvas.width/8,
   lBoxBottLineH: canvas.width/140,
}
function printpenBoxL(){
   ctx.fillStyle = 'white';
   ctx.fillRect(penBoxL.sBoxX, penBoxL.sBoxY, penBoxL.sBoxW, penBoxL.sBoxH);
   ctx.fillRect(penBoxL.lBoxX, penBoxL.lBoxY, penBoxL.lBoxW, penBoxL.lBoxH);
   ctx.fillRect(penBoxL.sBoxTopLineX, penBoxL.sBoxTopLineY, penBoxL.sBoxTopLineW, penBoxL.sBoxTopLineH);
   ctx.fillRect(penBoxL.sBoxBottLineX, penBoxL.sBoxBottLineY, penBoxL.sBoxBottLineW, penBoxL.sBoxBottLineH);
   ctx.fillRect(penBoxL.lBoxTopLineX, penBoxL.lBoxTopLineY, penBoxL.lBoxTopLineW, penBoxL.lBoxTopLineH);
   ctx.fillRect(penBoxL.lBoxBottLineX, penBoxL.lBoxBottLineY, penBoxL.lBoxBottLineW, penBoxL.lBoxBottLineH);
}

let penBoxR = {
   sBoxX: canvas.width - penBoxL.sBoxX,
   sBoxY: penBoxL.sBoxY,
   sBoxW: penBoxL.sBoxW,
   sBoxH: canvas.height/2,
   lBoxX: canvas.width - penBoxL.lBoxX,
   lBoxY: canvas.height/5,
   lBoxW: canvas.width/140,
   lBoxH: canvas.height/1.6,
   sBoxTopLineX: canvas.width - penBoxL.sBoxX,
   sBoxTopLineY: canvas.height/4,
   sBoxTopLineW: canvas.width/12,
   sBoxTopLineH: canvas.width/140,
   sBoxBottLineX: canvas.width - penBoxL.sBoxX,
   sBoxBottLineY: canvas.height - canvas.height/3.8,
   sBoxBottLineW: canvas.width/12,
   sBoxBottLineH: canvas.width/140,
   lBoxTopLineX: canvas.width - penBoxL.lBoxX,
   lBoxTopLineY: canvas.height/5,
   lBoxTopLineW: canvas.width/8,
   lBoxTopLineH: canvas.width/140,
   lBoxBottLineX: canvas.width - penBoxL.lBoxX,
   lBoxBottLineY: canvas.height - canvas.height/5.3,
   lBoxBottLineW: canvas.width/8,
   lBoxBottLineH: canvas.width/140,
}
function printpenBoxR(){
   ctx.fillStyle = 'white';
   ctx.fillRect(penBoxR.sBoxX, penBoxR.sBoxY, penBoxR.sBoxW, penBoxR.sBoxH);
   ctx.fillRect(penBoxR.lBoxX, penBoxR.lBoxY, penBoxR.lBoxW, penBoxR.lBoxH);
   ctx.fillRect(penBoxR.sBoxTopLineX, penBoxR.sBoxTopLineY, penBoxR.sBoxTopLineW, penBoxR.sBoxTopLineH);
   ctx.fillRect(penBoxR.sBoxBottLineX, penBoxR.sBoxBottLineY, penBoxR.sBoxBottLineW, penBoxR.sBoxBottLineH);
   ctx.fillRect(penBoxR.lBoxTopLineX, penBoxR.lBoxTopLineY, penBoxR.lBoxTopLineW, penBoxR.lBoxTopLineH);
   ctx.fillRect(penBoxR.lBoxBottLineX, penBoxR.lBoxBottLineY, penBoxR.lBoxBottLineW, penBoxR.lBoxBottLineH);
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

// // Field
// ctx.fillStyle = 'green';
// ctx.fillRect(40, 40, 200, 100);
// // Left goal
// ctx.fillStyle = 'white';
// ctx.fillRect(20, 70, 20, 40);
// // Right goal
// ctx.fillStyle = 'white';
// ctx.fillRect(240, 70, 20, 40);
// // Right goal
// ctx.fillStyle = 'white';
// ctx.fillRect(240, 70, 20, 40);








// function animate() { //Recursive function that    
//    ctx.clearRect(0, 0, innerWidth, innerHeight);
//    let x = Math.random() * 300;
//    let y = Math.random() * 150;
//    ctx.beginPath();
//    ctx.lineWidth = 5;
//    ctx.strokeStyle = "red"
//    ctx.arc(x, y, 5, Math.PI * 2, false);
//    ctx.stroke();   
//    ctx.fill();   
// }
// animate();



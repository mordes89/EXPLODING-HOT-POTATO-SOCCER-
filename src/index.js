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
const ctx = canvas.getContext('2d');            // Conventionally, ctx defined as our 2d canvas
ctx.rect(100,100,window.innerWidth, window.innerHeight-10)

requestAnimationFrame(play); //Loop gameplay

// User
let user = {
   x: 10,
   y: 50,
   w: window.innerWidth/50,
   h: window.innerWidth/10,
   steps: 15
}

let ball = {
   x: user.x+10,
   y: user.y+15,
   radius: window.innerWidth/50,
   steps: 15   
}

document.addEventListener("keydown", keyDowns);
document.addEventListener("keyup", keyUps);

function play(){   
   moveUser();

   // Clear the board before making a move:
   ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

   // print user and ball:
   printUser();
   printBall();     

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
      console.log(event.code)
   } else if (event.code ==='ArrowRight'){
      continuousRight = true
      console.log(event.code)
   }
   if (event.code ==='ArrowDown'){
      continuousDown = true      
      console.log(event.code)
   } else if (event.code ==='ArrowUp'){
      continuousUp = true
      console.log(event.code)
   }
}

function keyUps(){
   if (event.code ==='ArrowLeft'){
      continuousLeft = false
      console.log(event.code)
   } else if (event.code ==='ArrowRight'){
      continuousRight = false
      console.log(event.code)
   }
   if (event.code ==='ArrowDown'){
      continuousDown = false
      console.log(event.code)
   } else if (event.code ==='ArrowUp'){
      continuousUp = false  
      console.log(event.code)
   }
}



function printUser(){
   ctx.fillStyle = 'red';
   ctx.fillRect(user.x, user.y, user.w, user.h);
}

function printBall(){
   // let x = 60;
   // let y = 25;
   ctx.beginPath();
   ctx.lineWidth = 5;
   ctx.strokeStyle = "red"
   ctx.arc(ball.x, ball.y, 5, Math.PI * 2, false);
   ctx.stroke();   
   ctx.fill(); 
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



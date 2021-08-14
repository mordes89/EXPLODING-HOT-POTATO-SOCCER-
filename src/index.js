// import Example from "./scripts/example";


// document.addEventListener("DOMContentLoaded", ()=> {
//    // console.log("Hello World!");
//    // const main = document.getElementById("main");
//    // new Example(main);
// }); 
const canvas = document.querySelector('canvas'); //find the <canvas> element in the HTML
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');            // Conventionally, ctx defined as our 2d canvas
requestAnimationFrame(play); //Loop gameplay
// User
let user = {
   x: 20,
   y: 30,
   w: 50,
   h: 20,
   move: 100
}

document.addEventListener("keydown", keyDowns);
document.addEventListener("keyup", keyUps);

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

function play(){
   if (continuousLeft === true){
      user.x -= user.move;
   }
   if (continuousRight === true){
      user.x += user.move;
   }
   if (continuousDown === true){
      user.y += user.move;
   }
   if (continuousUp === true){
      user.y -= user.move;
   }


   // Clear the board before making a move:
   ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

   // User's new position printed:
   ctx.fillStyle = 'red';
   ctx.fillRect(user.x, user.y, user.w, user.h);

   // Continue playing:
   requestAnimationFrame(play); //Loop gameplay

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



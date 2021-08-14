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
   move: 10
}

document.addEventListener("keydown", keyDowns);
document.addEventListener("keyup", keyUps);



function keyDowns(){
   if (event.code ==='ArrowLeft'){
      user.x -= user.move;
      console.log(event.code)
   }
   if (event.code ==='ArrowRight'){
      user.x += user.move;
      console.log(event.code)
   }
   if (event.code ==='ArrowDown'){
      user.y += user.move;
      console.log(event.code)
   }
   if (event.code ==='ArrowUp'){
      user.y -= user.move;
      console.log(event.code)
   }
}

function keyUps(){
   if (event.code ==='ArrowLeft'){
      user.x -= user.move;
      console.log(event.code)
   }
   if (event.code ==='ArrowRight'){
      user.x += user.move;
      console.log(event.code)
   }
   if (event.code ==='ArrowDown'){
      user.y += user.move;
      console.log(event.code)
   }
   if (event.code ==='ArrowUp'){
      user.y -= user.move;
      console.log(event.code)
   }
}

function play(){
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



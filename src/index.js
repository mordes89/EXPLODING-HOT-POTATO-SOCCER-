// import Example from "./scripts/example";


// document.addEventListener("DOMContentLoaded", ()=> {
//    // console.log("Hello World!");
//    // const main = document.getElementById("main");
//    // new Example(main);
// }); 
const canvas = document.querySelector('canvas'); //find the <canvas> element in the HTML
// canvas.width = window.innerWidth;
// canvas.hight = window.innerHeight;
const ctx = canvas.getContext('2d');            // Conventionally, ctx defined as our 2d canvas


document.addEventListener("keydown", function(){
   if (event.code ==='ArrowLeft'){
      console.log("ArrowLeft")
   }
   if (event.code ==='ArrowRight'){
      console.log("ArrowRight")
   }
   if (event.code ==='ArrowDown'){
      console.log("ArrowDown")
   }
   if (event.code ==='ArrowUp'){
      console.log("ArrowUp")
   }
});

// Field
ctx.fillStyle = 'green';
ctx.fillRect(40, 40, 200, 100);
// Left goal
ctx.fillStyle = 'white';
ctx.fillRect(20, 70, 20, 40);
// Right goal
ctx.fillStyle = 'white';
ctx.fillRect(240, 70, 20, 40);
// Right goal
ctx.fillStyle = 'white';
ctx.fillRect(240, 70, 20, 40);
// ^^ctx.fillRect(x, y, Width, Hight); ([x=0, y=0] is the top left corner)

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



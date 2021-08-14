import Example from "./scripts/example";


document.addEventListener("DOMContentLoaded", ()=> {
   // console.log("Hello World!");
   const main = document.getElementById("main");
   new Example(main);
});

const canvas = document.querySelector('canvas'); //find the <canvas> element in the HTML
canvas.width = window.innerWidth;
canvas.hight = window.innerHeight;
const ctx = canvas.getContext('2d');            // Conventionally, ctx defined as our 2d canvas





// fillRect
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);
// ^^ctx.fillRect(x, y, Width, Hight); ([x=0, y=0] is the top left corner)


// strokeRect
ctx.strokeRect




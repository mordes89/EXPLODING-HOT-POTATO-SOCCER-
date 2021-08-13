import Example from "./scripts/example";


document.addEventListener("DOMContentLoaded", ()=> {
   // console.log("Hello World!");
   const main = document.getElementById("main");
   new Example(main);
});

const canvas = document.querySelector('canvas');
// console.log(canvas);
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);




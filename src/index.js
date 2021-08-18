// import Example from "./scripts/example";
import Player from "./scripts/players";
import Field from "./scripts/field";
import Ball from "./scripts/ball";
import Ai from "./scripts/ai";
import Messages from "./scripts/messages";


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
let ai = new Ai(canvas.width - canvas.width/10, canvas.height/2-canvas.height/10, 32, 48, 0, 1, 5);
let messageLeft = new Messages(10, 10)

function Play(){
   
   // Clear the board before making a move:
   ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
   
   field.printField();
   messageLeft.printMessage();
   ball.ballLogic(player, ai);
   player.playerLogic(ball);
   ai.aiLogic(ball)


   setTimeout(function(){
      // Continue playing recursively:
      requestAnimationFrame(Play); //Loop gameplay
   }, 30)
}


function keyDowns(){
   if (event.code ==='ArrowLeft'){
      console.log(event.code)
      player.continuousLeft = true
   } else if (event.code ==='ArrowRight'){
      console.log(event.code)
      player.continuousRight = true  
   }
   if (event.code ==='ArrowDown'){
      console.log(event.code)
      player.continuousDown = true  
 
   } else if (event.code ==='ArrowUp'){
      console.log(event.code)
      player.continuousUp = true

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
      ball.playerballPossession = false  
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
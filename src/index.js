import Player from "./scripts/players";
import Field from "./scripts/field";
import Ball from "./scripts/ball";
import Ai from "./scripts/ai";
import Messages from "./scripts/messages";
// import Game from "./scripts/game";


const canvas = document.getElementById('canvas1'); //find the <canvas> element in the HTML
canvas.width = window.innerWidth-1;
canvas.height = window.innerHeight-101;
canvas.style.resize = 200
canvas.style.position = 'flex'
canvas.style.background = "green";
const ctx = canvas.getContext('2d');    // Conventionally, ctx defined as our 2d canvas


document.addEventListener("keydown", keyDowns);
document.addEventListener("keyup", keyUps);

let field = new Field();
let ball = new Ball();
let player = new Player(canvas.width/10, canvas.height/2-canvas.height/10, 40, 56, 0, 2, canvas.width/16);
let ai = new Ai(canvas.width - canvas.width/10, canvas.height/2-canvas.height/10, 32, 48, 0, 1, 5);
let messages = new Messages(canvas.width/60, canvas.height/60)


messages.printStartGame()
function Play(){
   // Clear the board before making a move:
   ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
   
   field.printField();
   messages.printMessages(ball, field);
   player.playerLogic(ball);
   ball.ballLogic(player, ai);
   ai.aiLogic(ball)

   if (messages.gameOver) {
      messages.printWinLoseMessage();
   } else {
      setTimeout(function(){      
         requestAnimationFrame(Play); // Continue playing recursively
      }, 30)
   } 
}


function keyDowns(){
   if (event.code ==='ArrowLeft'){      
      player.continuousLeft = true
   } else if (event.code ==='ArrowRight'){
      player.continuousRight = true  
   }
   if (event.code ==='ArrowDown'){
      player.continuousDown = true  
 
   } else if (event.code ==='ArrowUp'){
      player.continuousUp = true

   }

   if (event.code ==='KeyD'){  //Kick Ball        
      if (ball.playerballPossession){
         player.frameY = 2; //player image looks like it's kicking the ball
         player.frameX = 1; //player image looks like it's kicking the ball
         player.continuousD = true;       // hold down D for strength
         ball.vx = 2;
         messages.gameOver = false;
         // if (!messages.muted){
         //    let umkick = new Audio(`././sounds/umkick.mp4`);
         //    umkick.play();
         // }
      }
   }
   if (event.code ==='KeyS'){          //Aim kick down
      player.continuousS = true;          
   }
   if (event.code ==='KeyW'){          //Aim kick up
      player.continuousW = true;      
   }

   if (event.code ==='KeyM'){          //Aim kick down
      messages.muted = !messages.muted; 
   }


   // let that = this;
   if (event.code ==='KeyY'){          //reset and start a new game
      messages.gameOver = false;
      messages.won = false;
      messages.lost = false;
      messages.countdown = 1000;
      player = new Player(canvas.width/10, canvas.height/2-canvas.height/10, 40, 56, 0, 2, 5);
      ai = new Ai(canvas.width - canvas.width/3, canvas.height/2-canvas.height/10, 32, 48, 0, 1, 5);
      ball = new Ball();
      requestAnimationFrame(Play); //gameplay    
   }
   if (event.code ==='Escape'){          //Aim kick up
      messages.gameOver = true;
   }
}

function keyUps(){
   if (event.code ==='ArrowLeft'){
      player.continuousLeft = false
   } else if (event.code ==='ArrowRight'){
      player.continuousRight = false
   }
   if (event.code ==='ArrowDown'){
      player.continuousDown = false
   } else if (event.code ==='ArrowUp'){
      player.continuousUp = false  
   }  
   if (event.code ==='KeyD'){  //Kick Ball
      if (ball.playerballPossession){
         player.frameY = 2;
         player.frameX = 3;
         // ball.x += ball.vx*20;      
         ball.playerballPossession = false  
         ball.ballRolling = true 
         if (!this.muted){
            let blastSound = new Audio(`././sounds/kick.mp4`);
            blastSound.play();
         }  
      }
      player.continuousD = false
   }
   if (event.code ==='KeyS'){  //Aim kick down
      player.continuousS = false; 
   }
   if (event.code ==='KeyW'){  //Aim kick up
      player.continuousW = false;      
   }
   if (event.code ==='Escape'){          //Aim kick up
      messages.printStartGame();
   }
}
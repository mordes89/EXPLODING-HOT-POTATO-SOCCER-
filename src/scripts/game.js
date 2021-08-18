// import Player from "./scripts/players";
// import Field from "./scripts/field";
// import Ball from "./scripts/ball";
     
// console.log(event.code)

// // let x = new Player;

// export default class Game{
//    constructor(){
//       this.canvas = document.querySelector('canvas');
//       this.canvas.width = window.innerWidth-10;
//       this.canvas.height = window.innerHeight-100;
//       this.ctx = this.canvas.getContext('2d');   // Conventionally, ctx defined as our 2d canvas 
//    }
   
//    restart(){
//       this.field = new Field();
//       this.ball = new Ball();
//       this.user = new Player(canvas.width/10, canvas.height/2-canvas.height/10, 40, 56, 0, 2, 5);
//       // this.ai = new Player(canvas.width - canvas.width/10, canvas.height/2-canvas.height/10, 32, 48, 0, 1, 5);
//    }
//    // requestAnimationFrame(play(this.canvas));
//       // Clear the board before making a move:
//       // this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
//    play(canvas){
//       this.field.printField();
//       ball.ballLogic();
//       user.playerLogic();
//    }

//    // setTimeout(function(){
//       // Continue playing recursively:
//       // requestAnimationFrame(play); //Loop gameplay
//    // }, 10)

// }
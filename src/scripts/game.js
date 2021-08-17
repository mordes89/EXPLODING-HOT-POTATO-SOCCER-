import Player from "./scripts/players";
import Field from "./scripts/field";
import Ball from "./scripts/ball";

// let x = new Player;

export default class Game{
   constructor(){
      this.canvas = document.querySelector('canvas');
      canvas.width = window.innerWidth-10;
      canvas.height = window.innerHeight-100;
      // canvas.style.top = "200px";
      // canvas.style.left = "100px";
      this.ctx = this.canvas.getContext('2d');   // Conventionally, ctx defined as our 2d canvas
      // ctx.rect(100,100,window.innerWidth, window.innerHeight-10)   
   }
   
   restart(){
      this.field = new Field();
      this.ball = new Ball();
      // let user = new Player;
      // let ai = new Player;
      this.user = new Player(canvas.width/10, canvas.height/2-canvas.height/10, 40, 56, 0, 2, 5);
      // this.ai = new Player(canvas.width - canvas.width/10, canvas.height/2-canvas.height/10, 32, 48, 0, 1, 5);
   }
   // requestAnimationFrame(play(this.canvas));
      // Clear the board before making a move:
      // this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
   play(canvas){
      this.field.printField();
      ball.ballLogic();
      user.playerLogic();
   }

   // setTimeout(function(){
      // Continue playing recursively:
      // requestAnimationFrame(play); //Loop gameplay
   // }, 10)

}
import Ball from "./ball";

export default class Messages{
   constructor(x, y){
      this.canvas = document.querySelector('canvas');
      this.ctx = this.canvas.getContext('2d');    

      // Line width for 6 vertical lines: 
      this.vertiLineW = this.canvas.width/3; 
      this.horizontalH = this.canvas.width/10; 

      this.x = x;
      this.y = y; 
      
      this.textSize = this.canvas.width/60;
      this.textX = this.x + this.canvas.width/140;
      this.textY = this.y+this.canvas.height/40


      this.countdown = 300;
      this.secondsCounter = 0
   }
  

   printInstructions(){
      // print box:
      // this.ctx.strokeStyle = 'yellow';
      // this.ctx.strokeRect(this.x, this.y, this.vertiLineW, this.horizontalH);
      
      // print text instruxtions:
      this.ctx.font = `bold italic ${this.textSize}px Arial`;
      this.ctx.fillStyle = "purple";
      this.ctx.textAlign = 'left';
      this.ctx.textBaseline = 'top;'
      this.ctx.fillText("Use keyboard arrows to run!", this.textX, this.textY);
      this.ctx.fillText("Use 'S' and 'W' to aim the ball.", this.textX*2, this.textY*2);
      this.ctx.fillText("Long-press 'D' to kick the ball!", this.textX*3, this.textY*3);
      this.ctx.fillText("", this.x + this.canvas.width/45, this.y+this.canvas.height/5);
   }

   printCountdown(){
      // console.log(1);
      let that = this;
      setTimeout(function(){
         that.ctx.font = `italic ${that.textSize*3}px Arial`;
         that.ctx.fillStyle = "purple";
         that.ctx.textAlign = 'left';
         that.ctx.textBaseline = 'top;'
         that.ctx.strokeText(that.countdown/100, that.textSize*2, that.canvas.height-that.textSize);
         that.countdown--;
      }, )
   }

   printWinLose(ball, field) {
      if ((ball.x === this.canvas.length-5 && (ball.y>field.goalY && ball.y<=field.goalY+field.goalH))  || (this.countdown === 0 && ball.x > this.canvas.width/2)){
         // end game
         // print explosion on right side
         // print YOU WON!!
         console.log("you won!");
      } else if ((ball.x === 5 && (ball.y>field.goalY && ball.y<=field.goalY+field.goalH)) || (this.countdown === 0 && ball.x <= this.canvas.width/2)) {
         // end game
         // print explosion on left side
         // print YOU LOST :(
         console.log("you lost!");
      }
   }



   printMessages(ball, field){
      this.printCountdown();
      this.printInstructions();
      this.printWinLose(ball, field);
   }


}
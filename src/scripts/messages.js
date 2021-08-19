export default class Messages{
   constructor(x, y){
      this.canvas = document.querySelector('canvas');
      this.ctx = this.canvas.getContext('2d');      
      
      this.x = x;      
      this.y = y; 

      this.gameOver = true;
      this.won = false;
      this.lost = false;

      // Line width for 6 vertical lines: 
      this.vertiLineW = this.canvas.width/3; 
      this.horizontalH = this.canvas.width/10;
           
      this.textSize = this.canvas.width/60;
      this.textX = this.x + this.canvas.width/140;
      this.textY = this.y+this.canvas.height/70      
      
      this.countdown = 1000; //set it in index.js Ykeypress
      this.muted = false;
   }
   
   printWinLoseMessage(){ 
      if (this.won) {         
         this.ctx.font = `bold ${this.textSize*5.5}px Arial`; 
         this.ctx.fillStyle = "green";
         this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height);
         this.ctx.textAlign = 'center';
         this.ctx.fillStyle = "yellow";
         this.ctx.fillText("YOU WON!! :)",this.canvas.width/2, this.canvas.height/2);
         let that = this;
         setTimeout(function(){
            that.printStartGame();  
         }, 5000)
      } 
      if (this.lost) {         
         this.ctx.font = `bold ${this.textSize*5.5}px Arial`; 
         this.ctx.fillStyle = "red";
         this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height);
         this.ctx.textAlign = 'center';
         this.ctx.fillStyle = "yellow";
         this.ctx.fillText("YOU LOSE :(",this.canvas.width/2, this.canvas.height/2);
         let that = this;
         setTimeout(function(){
            that.printStartGame();  
         }, 5000)
      } 
   }
   printStartGame(){      
      this.ctx.font = `bold ${this.textSize*1.5}px Arial`; 
      this.ctx.fillStyle = "purple";
      this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height)

      // print the start/restart instruxtions:
      this.ctx.font = `bold ${this.textSize*1.5}px Arial`; 
      this.ctx.fillStyle = "yellow";  
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'top';
      this.ctx.fillText("There are two ways to win the game:", this.canvas.width/2, this.textY*2);
      
      this.ctx.textAlign = 'left';
      this.ctx.fillText("1. Score a goal! ", this.canvas.width/8, this.textY*4);
      this.ctx.fillText("2. Time expires with the ball", this.canvas.width/8, this.textY*6);
      this.ctx.fillText("     in the opponent's half.", this.canvas.width/8, this.textY*8);
      
      this.ctx.fillText("Instructions:", this.canvas.width/8, this.textY*12);
      this.ctx.fillText("Use keyboard arrows to run!", this.canvas.width/6, this.textY*14);
      this.ctx.fillText("Use 'S' and 'W' to aim the ball.", this.canvas.width/5, this.textY*16);
      this.ctx.fillText("Long-press 'D' to kick the ball!", this.canvas.width/4, this.textY*18);
      

      this.ctx.textAlign = 'center';
      this.ctx.font = `bold ${this.textSize*1.5}px Arial`;
      this.ctx.fillText("Press 'M' to mute sound", this.canvas.width/2, this.textY*23);

      this.ctx.textAlign = 'center';
      this.ctx.font = `bold ${this.textSize*2.5}px Arial`;
      this.ctx.fillText("Press 'Y' for a new game!", this.canvas.width/2, this.textY*26);
   }
  

   printInstructions(){    
      this.ctx.font = `bold italic ${this.textSize}px Arial`;
      this.ctx.fillStyle = "purple";
      this.ctx.textAlign = 'left';
      this.ctx.textBaseline = 'top;'
      this.ctx.fillText("Use keyboard arrows to run!", this.textX, this.textY);
      this.ctx.fillText("Use 'S' and 'W' to aim the ball.", this.textX*2, this.textY*2);
      this.ctx.fillText("Long-press 'D' to kick the ball!", this.textX*3, this.textY*3);
   }

   printCountdown(){
         this.ctx.font = `${this.textSize*2}px Arial`;
         this.ctx.fillStyle = "maroon";
         this.ctx.fillText(this.countdown/100, this.canvas.width-this.textSize*20, this.canvas.height/20);
         this.countdown--;
   }   
   printWinLose(ball, field) {
      if ((ball.x >= (this.canvas.width - this.canvas.width/99)
            && (ball.y>this.canvas.height/3 && ball.y<(this.canvas.height - this.canvas.height/3)))  
            || (this.countdown < 0 && ball.x > this.canvas.width/2)){
         for (let i = 1; i <= 7; i++) {            
            let that = this
            let explosion = new Image();
            explosion.src = `././pics/explosions_agresko/Explosion_${i}.png`; //W: , H: 
               setTimeout(function(){
               that.ctx.drawImage(explosion, ball.x-(i*30), ball.y)
            }, 75)      
         }
         this.gameOver = true;
         this.won = true;
         if (!this.muted){
            let blastSound = new Audio(`././sounds/thatWentWell.mp4`);
            blastSound.play();
         }
      } 
      if ((ball.x < this.canvas.width/99 // Lost!!
            && (ball.y>this.canvas.height/3 && ball.y<=(this.canvas.height - this.canvas.height/3))) 
            || (this.countdown < 0 && ball.x <= this.canvas.width/2)) {            
         for (let i = 1; i <= 7; i++) {            
            let that = this
            let explosion = new Image();
            explosion.src = `././pics/explosions_agresko/Explosion_${i}.png`; //W: , H: 
               setTimeout(function(){
               that.ctx.drawImage(explosion, ball.x*i/2, ball.y)
            }, 75)      
         }
         if (!this.muted){
            let blastSound = new Audio(`././sounds/kabloui.mp4`);
            blastSound.play();
         }
         this.gameOver = true;
         this.lost = true;
      }
   }


   printMessages(ball, field){

      this.printWinLose(ball, field);
      this.printCountdown();
      this.printInstructions();
   }

}
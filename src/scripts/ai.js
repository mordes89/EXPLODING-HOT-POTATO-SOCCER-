export default class Ai {

   constructor(x = (this.canvas.width - this.canvas.width/6), y = this.canvas.height/2-this.canvas.height/10, w = 32, h = 48, frameX = 0, frameY = 1, steps = 5) {
      this.canvas = document.querySelector('canvas');
      this.ctx = this.canvas.getContext('2d');

      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.FrameX = frameX;
      this.FrameY = frameY;
      this.steps = steps;

      // this.userSprite = new Image();
      // this.userSprite.src = "././pics/yoda.png"; //W: 32, H: 48
      this.aiSprite = new Image();
      this.aiSprite.src = "././pics/deadpool.png"; //W: 32, H: 48
   }

   aiLogic(ball){   
      this.ctx.drawImage(this.aiSprite, this.w * this.frameX, this.h * this.frameY, this.w, this.h, this.x, this.y, this.canvas.width/10, this.canvas.height/6)  //draw ai
      this.moveAi(ball);
   }

   moveAi(ball){
      // run back when ball is in other half -- Defensive stance
      if (ball.x < this.canvas.width/2 && this.x + this.steps < (this.canvas.width)-this.w*5){
         this.x += this.steps;  // Move right
         this.frameY = 1;
         this.aiMovingPicsBackwards(); 
      }
      if ((ball.x < this.x && this.x - this.steps > this.canvas.width/2) && (ball.x > this.canvas.width/2)){  
      // ^^conditions: 1.move toward ball 2.remain within own half
         this.x -= this.steps;   // move left
         this.frameY = 1;      // character frame row 1
         this.aiMovingPics();       // alternate pice in row
      } 
      if (ball.x > this.x+this.canvas.width/17 && this.x + this.steps < (this.canvas.width)-this.w){
         this.x += this.steps;  // Move right
         this.frameY = 2;
         this.aiMovingPics(); 
      }
      if (ball.y >= this.y+this.h*1.2 && this.y + this.steps < this.canvas.height-this.w){
         this.y += this.steps; //Move down
         // this.frameY = 0;
         this.aiMovingPics();  
      }
      if (ball.y < this.y && this.y - this.steps > this.canvas.height/50){
         this.y -= this.steps; //Move up
         // this.frameY = 3;
         this.aiMovingPics();
      }  


      // AI kicks the ball back
      if ((ball.x >= this.x+this.canvas.width/35 && ball.x <= this.x+this.canvas.width/17) && (ball.y>this.y && ball.y<=this.y+this.canvas.height/6.6)){
         ball.x = this.x+this.canvas.width/35;
         ball.y = this.y+this.canvas.height/6.6;
         if (ball.vx>0) {            
            ball.vx = -(ball.vx+0.2); //Velocity in opposite direction. i.e. turn around.
         }    
         if (!this.muted){
            let blastSound = new Audio(`././sounds/boink.mp4`);
            blastSound.play();
         }     
      } 
      
   }
   aiMovingPics() {   
      if (this.frameX < 3) {
         this.frameX++;
      } else {
         this.frameX = 0;
      }
   }
   aiMovingPicsBackwards() {   
      if (this.frameX > 0) {
         this.frameX--;
      } else {
         this.frameX = 3;
      }
   }
}
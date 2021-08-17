export default class Ai {

   constructor(x = this.canvas.width/10, y = this.canvas.height/2-this.canvas.height/10, w = 32, h = 48, frameX = 0, frameY = 1, steps = 5) {
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
      this.aiSprite.src = "pics\deadpool.png"; //W: 32, H: 48
   }

   aiLogic(ball){   
      // this.ctx.drawImage.bind(img, sX, sY, sW, sH, dX, dY, dW, dH)
      this.ctx.drawImage(this.aiSprite, this.w * this.frameX, this.h * this.frameY, this.w, this.h, this.x, this.y, this.canvas.width/10, this.canvas.height/6)
      // this.printSprite();
      this.moveAi(ball);
      // this.printSprite(aiSprite, ai.w * ai.frameX, ai.h * ai.frameY, ai.w, ai.h, ai.x, ai.y, canvas.width/10, canvas.height/6)
      this.aimBallAi(ball)
   }

   moveAi(ball){
      if (this.x - this.steps > this.canvas.width/50){  
         this.x -= this.steps;   // move in direction
         this.frameY = 1;      // character frame row 1
         this.aiMovingPics();       // alternate pice in row
         if (this.ballPossession) {      //runs to the left with ball 
            ball.x = this.x+this.w;
            ball.y = this.y+this.h*1.4;
         }
      }
      if (this.x + this.steps < (this.canvas.width/2)-this.w){
         this.x += this.steps;
         this.frameY = 2;
         this.aiMovingPics();
         if (this.ballPossession) {      //runs to the right with ball 
            ball.x = this.x+this.w*2.5;
            ball.y = this.y+this.h*1.4;
         }
      }
      if (this.y + this.steps < this.canvas.height-this.w){
         this.y += this.steps;
         this.frameY = 0;
         this.aiMovingPics();
         if (this.ballPossession) {      //runs down with ball 
            ball.x = this.x+this.w;
            ball.y = this.y+this.h*1.8;
         }
      }
      if (this.y - this.steps > this.canvas.height/50){
         this.y -= this.steps;
         this.frameY = 3;
         this.aiMovingPics();
         if (this.ballPossession) {      //runs up with ball 
            ball.x = this.x+this.w*1.3;
            ball.y = this.y;
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
}
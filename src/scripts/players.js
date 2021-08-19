export default class Player {
// let player = new Player(canvas.width/10, canvas.height/2-canvas.height/10, 40, 56, 0, 2, 5);
   constructor(x, y, w, h, frameX, frameY, steps) {
      this.canvas = document.querySelector('canvas');
      this.ctx = this.canvas.getContext('2d');

      this.continuousLeft = false;
      this.continuousRight = false;
      this.continuousDown = false;
      this.continuousUp = false;
      this.continuousD = false;
      this.continuousS = false;
      this.continuousW = false;

      // ball.playerballPossession = false;

      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.frameX = frameX;
      this.frameY = frameY;
      this.steps = steps;

      this.userSprite = new Image();
      this.userSprite.src = "././pics/hulk.png"; //W: 40, H: 56
   }

   playerLogic(ball){   
      // this.ctx.drawImage.bind(img, sX, sY, sW, sH, dX, dY, dW, dH)
      // this.ctx.drawImage(this.userSprite, this.w * this.frameX, this.h * this.frameY, this.w, this.h, this.x, this.y, this.canvas.width/10, this.canvas.height/6)
      // ^^this is the working one.
      this.ctx.drawImage(this.userSprite, this.w * this.frameX, this.h * this.frameY, this.w, this.h, this.x, this.y, this.canvas.width/10, this.canvas.height/6)
      // this.printSprite();
      this.moveUser(ball);
      // this.printSprite(aiSprite, ai.w * ai.frameX, ai.h * ai.frameY, ai.w, ai.h, ai.x, ai.y, canvas.width/10, canvas.height/6)
      this.aimBall(ball)
   } 
 

   moveUser(ball){
      if (this.continuousLeft === true && this.x - this.steps > this.canvas.width/50){  
         this.x -= this.steps;   // move left
         this.frameY = 1;      // character frame row 1
         this.userMovingPics();       // alternate pice in row
         if (ball.playerballPossession) {      //runs to the left with ball 
            ball.x = this.x+this.w;
            ball.y = this.y+this.h*1.4;
         }
      }
      if (this.continuousRight === true && this.x + this.steps < (this.canvas.width/2)-this.w){
         this.x += this.steps;
         this.frameY = 2;
         this.userMovingPics();
         if (ball.playerballPossession) {      //runs to the right with ball 
            ball.x = this.x+this.w*2.5;
            ball.y = this.y+this.h*1.4;
         }
      }
      if (this.continuousDown === true && this.y + this.steps < this.canvas.height-this.w){
         this.y += this.steps;
         this.frameY = 0;
         this.userMovingPics();
         if (ball.playerballPossession) {      //runs down with ball 
            ball.x = this.x+this.w;
            ball.y = this.y+this.h*1.8;
         }
      }
      if (this.continuousUp === true && this.y - this.steps > this.canvas.height/50){
         this.y -= this.steps;
         this.frameY = 3;
         this.userMovingPics();
         if (ball.playerballPossession) {      //runs up with ball 
            ball.x = this.x+this.w*1.3;
            ball.y = this.y;
         }
      }   
      
   }
   userMovingPics() {   
      if (this.frameX < 3) {
         this.frameX++;
      } else {
         this.frameX = 0;
      }
   }

   aimBall(ball){
      if (this.continuousS && ball.playerballPossession){  //Aim kick down
         if (ball.vy<15) {         
            ball.vy++;
         }  
      } 
      if (ball.vy<-30 && ball.vy>-15) {         
         ball.vy++;
      }
      if (this.continuousW && ball.playerballPossession){  //Aim kick up
         if (ball.vy>-15) {         
            ball.vy--;
         }  
      }
      if (this.continuousD && ball.playerballPossession){  
         if (ball.vx<15) {         
            ball.vx++;
         }  
      }
   }   
}
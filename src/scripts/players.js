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

      this.ballPossession = false;

      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.frameX = frameX;
      this.frameY = frameY;
      this.steps = steps;

      // this.listeners();
      // this.printSprite();
      this.moveUser();

      this.userSprite = new Image();
      this.userSprite.src = "././pics/hulk.png"; //W: 40, H: 56
      // this.aiSprite = new Image();
      // this.aiSprite.src = "pics\deadpool.png"; //W: 32, H: 48,
   }

   playerLogic(ball){   
      // this.ctx.drawImage.bind(img, sX, sY, sW, sH, dX, dY, dW, dH)
      this.ctx.drawImage(this.userSprite, this.w * this.frameX, this.h * this.frameY, this.w, this.h, this.x, this.y, this.canvas.width/10, this.canvas.height/6)
      // this.printSprite();
      this.moveUser(ball);
      // this.printSprite(aiSprite, ai.w * ai.frameX, ai.h * ai.frameY, ai.w, ai.h, ai.x, ai.y, canvas.width/10, canvas.height/6)
      this.aimBall(ball)
   }
   
   // printSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
   //    this.ctx.drawImage.bind(img, sX, sY, sW, sH, dX, dY, dW, dH)
   // }   

   moveUser(ball){
      if (this.continuousLeft === true && this.x - this.steps > this.canvas.width/50){  
         console.log("this is the moveUser in player.js");
         this.x -= this.steps;   // move in direction
         this.frameY = 1;      // character frame row 1
         this.userMovingPics();       // alternate pice in row
         if (this.ballPossession) {      //runs to the left with ball 
            ball.x = this.x+this.w;
            ball.y = this.y+this.h*1.4;
         }
      }
      if (this.continuousRight === true && this.x + this.steps < (this.canvas.width/2)-this.w){
         this.x += this.steps;
         this.frameY = 2;
         this.userMovingPics();
         if (this.ballPossession) {      //runs to the right with ball 
            ball.x = this.x+this.w*2.5;
            ball.y = this.y+this.h*1.4;
         }
      }
      if (this.continuousDown === true && this.y + this.steps < this.canvas.height-this.w){
         this.y += this.steps;
         this.frameY = 0;
         this.userMovingPics();
         if (this.ballPossession) {      //runs down with ball 
            ball.x = this.x+this.w;
            ball.y = this.y+this.h*1.8;
         }
      }
      if (this.continuousUp === true && this.y - this.steps > this.canvas.height/50){
         this.y -= this.steps;
         this.frameY = 3;
         this.userMovingPics();
         if (this.ballPossession) {      //runs up with ball 
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
      if (this.continuousS && this.ballPossession){  //Aim kick down
         if (ball.vy<15) {         
            ball.vy++;
            // console.log(vy);
         }  
      }
      if (this.continuousW && this.ballPossession){  //Aim kick up
         if (ball.vy>-15) {         
            ball.vy--;
            // console.log(vy);
         }  
      }
      if (this.continuousD && this.ballPossession){  
         if (ball.vx<15) {         
            ball.vx++;
            console.log(ball.vx);
         }  
      }
   }

   

   // listeners(){
   //    // this.boundkeydown = this.keydowns(this);
   //    // document.addEventListener("keydown", this.boundkeydown);
   //    // if (event.code ==='KeyD'){
   //    //    console.log(event.code);  
   //    // }
   //    // this.boundkeyup = this.keyup.bind(this);
   //    // document.addEventListener("keyup", this.boundkeyup);
   // }

   // keyDowns(){
   //    if (event.code ==='ArrowLeft'){
   //       this.continuousLeft = true
   //       console.log(event.code)
   //       console.log(this.continuousLeft)
   //       // if (ball.vx>0 && (this.ballPossession === true)) {         
   //       //    this.vx= -(this.vx);
   //       // }
   //    }
   // }

   // keyDowns(){
   //    if (event.code ==='ArrowLeft'){
   //       this.continuousLeft = true
   //       if (ball.vx>0 && (this.ballPossession === true)) {         
   //          this.vx= -(this.vx);
   //       }
   //       console.log(event.code)
   //    } else if (event.code ==='ArrowRight'){
   //       continuousRight = true
   //       if (vx<0 && (ballPossession === true)) {         
   //          vx= -(vx);
   //       console.log(event.code)
   //       }
   //    }
   //    if (event.code ==='ArrowDown'){
   //       continuousDown = true  
   //       if (vy<0 && (ballPossession === true)) {         
   //          vy= -(vy);
   //       }   
   //    } else if (event.code ==='ArrowUp'){
   //       continuousUp = true
   //       if (vy>0 && (ballPossession === true)) {         
   //          vy = -(vy);
   //       }
   //    }
   
   //    if (event.code ==='KeyD'){  //Kick Ball        
   //       continuousD = true;      // hold down D for strength
   //       vx = 2;
   //    }
   //    if (event.code ==='KeyS'){  //Aim kick down
   //       continuousS = true;          
   //    }
   //    if (event.code ==='KeyW'){  //Aim kick up
   //       continuousW = true;      
   //    }
   // }

   

   
}
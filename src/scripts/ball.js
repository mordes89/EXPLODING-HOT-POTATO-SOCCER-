// Might need to import user

export default class Ball {
   constructor(){
      this.canvas = document.querySelector('canvas');
      this.ctx = this.canvas.getContext('2d');
      
      this.x = this.canvas.width/2;
      this.y = this.canvas.height/2;
      this.radius =  this.canvas.width/200;
      this.vx = 7;
      this.vy = 7;
      this.ballRolling = true;
      this.playerballPossession = false;
      // this.aiballPossession = false;



   }
   printBall(){
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      this.ctx.lineWidth = 7;
      this.ctx.strokeStyle = "yellow"
      this.ctx.stroke();   
      this.ctx.fillStyle = "blue"
      this.ctx.fill(); 
   }
   printBallAimDots(x, y, radius, width){
      this.ctx.beginPath();
      this.ctx.lineWidth = width;
      this.ctx.strokeStyle = "red"
      this.ctx.arc(x, y, radius, 0, Math.PI * 2, false);
      this.ctx.stroke();   
   }

   moveBall(player, ai){
      // Move ball:
      if (this.ballRolling) {      
         this.x += this.vx; // Left/Right
         this.y += this.vy; // Up/Down
      }
      // player takes control of ball
      if ((this.x <= player.x+player.w && this.x >= player.x) && (this.y >= player.y && this.y <= (player.y + player.h+30))) {
         this.ballRolling = false;
         this.playerballPossession = true;
         this.vy = 0.4;
         this.vx = 6;        
      }
      
      // turn around at wall left/right
      if ((this.x + this.vx <= 0) || (this.x + this.vx > this.canvas.width-(this.radius))){
         console.log(ai.x);
      // ^^if ball is traveling left OR ball is hitting left wall
         this.vx = -(this.vx+0.2); //Velocity in opposite direction. i.e. turn around.
         if (this.vx>20 || this.vx<-20) { //reset ball speed
            this.vx = 7;
         }     
      }
      // turn around at wall top/bottom
      if ((this.y + this.vy <= 0) || (this.y + this.vy > this.canvas.height-(this.radius))){
         this.vy = -(this.vy+0.2);
         if (this.vy>20 || this.vy<-20) { //reset ball speed
            this.vy = 7;
         }     
      }
   }




   ballLogic(player, ai){
      this.printBall();
      this.moveBall(player, ai);

      // eventually wrap these in an if statement to only show when player has passession
      this.printBallAimDots(this.x+(this.vx*2), this.y+(this.vy*3), 0.2, 5);
      this.printBallAimDots(this.x+(this.vx*4), this.y+(this.vy*5), 0.2, 3);
      this.printBallAimDots(this.x+(this.vx*6), this.y+(this.vy*7), 0.2, 1);
   }
}
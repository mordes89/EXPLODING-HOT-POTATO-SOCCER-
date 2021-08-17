// Might need to import user

export default class Ball {
   constructor(){
      this.canvas = document.querySelector('canvas');
      this.ctx = this.canvas.getContext('2d');
      
      this.x = 0,
      this.y = 0,
      this.radius =  window.innerWidth/170
      this.vx = 7;
      this.vy = 7;
      this.ballRolling = true;
      this.ballPossession = false;



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

   moveBall(){
      // Move ball:
      if (this.ballRolling) {      
         this.x += this.vx; // Left/Right
         this.y += this.vy; // Up/Down
      }
      // player takes control of ball
      // if ((ball.x <= user.x+user.w && ball.x >= user.x) && (ball.y >= user.y && ball.y <= (user.y + user.h+30))) {
      //    ballRolling = false;
      //    ballPossession = true;
      //    vy = 0.1;
      // }
      
      // turn around at wall left/right
      if ((this.x + this.vx <= 0) || (this.x + this.vx > this.canvas.width-(this.radius*2))){
         if (this.vx>0) {         
            this.vx = -(this.vx+0.2);
         }else{
            this.vx = -(this.vx-0.2);
         }
         if (this.vx>20 || this.vx<-20) { //reset ball speed
            this.vx = 7;
         }     
         // console.log(vx);
      }
      // turn around at wall top/bottom
      if ((this.y + this.vy <= 0) || (this.y + this.vy > this.canvas.height-(this.radius*2))){
         if (this.vy>0) {         
            this.vy = -(this.vy+0.2);
         }else{
            this.vy = -(this.vy-0.2);
         } 
         if (this.vy>20 || this.vy<-20) { //reset ball speed
            this.vy = 7;
         }     
         // console.log(vy);
      }
   }




   ballLogic(){
      this.printBall();
      this.moveBall();

   }
}
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
   }

   // textSize(){
   //    do{

   //    }
   // }

   printMessage(){
      // print box:
      this.ctx.strokeStyle = 'yellow';
      // this.ctx.strokeRect(this.x, this.y, this.vertiLineW, this.horizontalH);
      // print text:
      this.ctx.font = `bold italic ${this.textSize}px Arial`;
      this.ctx.fillStyle = "purple";
      this.ctx.textAlign = 'left';
      this.ctx.textBaseline = 'top;'
      this.ctx.fillText("Use keyboard arrows to run!", this.textX, this.textY);
      this.ctx.fillText("Use 'S' and 'W' to aim the ball.", this.textX*2, this.textY*2);
      this.ctx.fillText("Long-press 'D' to kick the ball!", this.textX*3, this.textY*3);
      this.ctx.fillText("", this.x + this.canvas.width/45, this.y+this.canvas.height/5);
   }
}
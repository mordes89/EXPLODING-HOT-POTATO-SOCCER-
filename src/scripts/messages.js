export default class Messages{
   constructor(x, y){
      this.canvas = document.querySelector('canvas');
      this.ctx = this.canvas.getContext('2d');    

      // Line width for 6 vertical lines: 
      this.vertiLineW = this.canvas.width/4; 
      this.horizontalH = this.canvas.width/6; 

      this.x = x;
      this.y = y;      
   }

   printMessage(){
      this.ctx.strokeStyle = 'yellow';
      this.ctx.strokeRect(this.x, this.y, this.vertiLineW, this.horizontalH);
   
   }
}
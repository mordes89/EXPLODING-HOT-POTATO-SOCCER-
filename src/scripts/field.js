export default class Field{
   constructor(topCornerX = 0, topCornerY = 0){
      this.canvas = document.querySelector('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.topCornerX = topCornerX;
      this.topCornerY = topCornerY;

      // Line width for 6 vertical lines: 
      this.vertiLineW = this.canvas.width/140; 
      this.horizontalH = this.canvas.width/140; 

      // Small Box dimentions for horizontal penalty box lines - both sides:
      this.sBoxTopNBotlineW = this.canvas.width/12;
      this.sBoxTopNBotlineX = this.canvas.width - this.canvas.width/12;
      this.sBoxTopLineY = this.canvas.height/4;
      this.sBoxBottLineY = this.canvas.height - this.canvas.height/4 - this.canvas.width/140;
      // Small Box Verticle lines dimentions
      this.sBoxVErtiY = this.canvas.height/4;
      this.sBoxVertiH = this.canvas.height/2;
      this.sBoxVertiXL = this.canvas.width/12; //Left!!
      this.sBoxVertiXR = this.canvas.width - this.canvas.width/12; //Right!!
      
      // Large Box dimentions for horizontal penalty box lines - both sides:
      this.lBoxTopNBotlineW = this.canvas.width/5;
      this.lBoxTopNBotlineX = this.canvas.width - this.canvas.width/5;
      this.lBoxTopLineY = this.canvas.height/7;
      this.lBoxBottLineY = this.canvas.height - this.canvas.height/7 - this.canvas.width/140;
      // Large  Box Verticle lines dimentions
      this.lBoxVErtiY = this.canvas.height/7;
      this.lBoxVertiH = this.canvas.height/1.4;
      this.lBoxVertiXL = this.canvas.width/5; //Left!!
      this.lBoxVertiXR = this.canvas.width - this.canvas.width/5; //Right!!
   }

   printpenBoxes(){
      this.ctx.fillStyle = 'white';
      // veritcal line - Print small box left
      this.ctx.fillRect(this.sBoxVertiXL, this.sBoxVErtiY, this.vertiLineW, this.sBoxVertiH);
      // veritcal line - Print small box Right
      this.ctx.fillRect(this.sBoxVertiXR, this.sBoxVErtiY, this.vertiLineW, this.sBoxVertiH);
      // veritcal line - Print Large box left
      this.ctx.fillRect(this.lBoxVertiXL, this.lBoxVErtiY, this.vertiLineW, this.lBoxVertiH);
      // veritcal line - Print Large box Right
      this.ctx.fillRect(this.lBoxVertiXR, this.lBoxVErtiY, this.vertiLineW, this.lBoxVertiH);
      
      // horizontal line - small box top Left
      this.ctx.fillRect(0, this.sBoxTopLineY, this.sBoxTopNBotlineW, this.horizontalH);
      // horizontal line - small box top Right
      this.ctx.fillRect(this.sBoxTopNBotlineX, this.sBoxTopLineY, this.sBoxTopNBotlineW, this.horizontalH);
      // horizontal line - small box bottom Left
      this.ctx.fillRect(0, this.sBoxBottLineY, this.sBoxTopNBotlineW, this.horizontalH);
      // horizontal line - small box bottom Right
      this.ctx.fillRect(this.sBoxTopNBotlineX, this.sBoxBottLineY, this.sBoxTopNBotlineW, this.horizontalH);
      
      // horizontal line - large box top Left
      this.ctx.fillRect(0, this.lBoxTopLineY, this.lBoxTopNBotlineW, this.horizontalH);
      // horizontal line - large box top Right
      this.ctx.fillRect(this.lBoxTopNBotlineX, this.lBoxTopLineY, this.lBoxTopNBotlineW, this.horizontalH);
      // horizontal line - large box bottom Left
      this.ctx.fillRect(0, this.lBoxBottLineY, this.lBoxTopNBotlineW, this.horizontalH);
      // horizontal line - large box bottom Right
      this.ctx.fillRect(this.lBoxTopNBotlineX, this.lBoxBottLineY, this.lBoxTopNBotlineW, this.horizontalH);
      // printpenBoxLhalfCircle();
      // printpenBoxDot(penBoxL.lBoxX-30, penBoxR.lBoxY*3.5, 1, penBoxL.verticalW)
   }

   printMidLine(x = ((this.canvas.width/2) - this.canvas.width/140/2),
   y = 0,
   w = this.vertiLineW,
   h = this.canvas.height,){
      
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(x, y, w, h);
   }
   
   printMidCir(x = this.canvas.width/2
                     ,y = this.canvas.height/2
                     ,radius = this.canvas.height/10
                     ,width = this.vertiLineW){
         
         this.ctx.beginPath();
         this.ctx.lineWidth = width;
         this.ctx.strokeStyle = "white";
         this.ctx.arc(x, y, radius, 0, Math.PI * 2, false);
         this.ctx.stroke();   
         // ctx.fill(); 
      }
      
   printpenBoxHalfCircle(x = this.canvas.width/5,
                           y = this.canvas.height/7*3.5,   
                           radius = this.canvas.height/15,
                           width = this.canvas.width/140,
                           startAngle = -1.5,
                           endAngle = 1.5){
         this.ctx.beginPath();
         this.ctx.arc(x, y, radius, startAngle, endAngle, false);
         this.ctx.lineWidth = width;
         this.ctx.strokeStyle = "white"
         this.ctx.stroke();   
   }

   printpenBoxDot(x, y, radius, width){
      this.ctx.beginPath();
      this.ctx.lineWidth = width;
      this.ctx.strokeStyle = "white"
      this.ctx.arc(x, y, radius, 0, Math.PI * 2, false);
      this.ctx.stroke();   
   }
         
   printField(){ 
      this.printMidCir();
      this.printMidLine();
      this.printpenBoxHalfCircle(); // default values are for left pen box
      this.printpenBoxHalfCircle(this.lBoxVertiXR+this.vertiLineW/3, this.canvas.height/7*3.5, this.canvas.height/15, this.canvas.width/140, 1.5, -1.5); //right penbox half circle
      this.printpenBoxes();
      this.printpenBoxDot(this.canvas.width/7, this.lBoxVErtiY*3.5, 1, this.vertiLineW); // default values are for left pen box
      this.printpenBoxDot(this.canvas.width - this.canvas.width/7, this.lBoxVErtiY*3.5, 1, this.vertiLineW); // right pen box dot
   }     
}




export default class Ai {

   constructor(x = this.canvas.width/10, y = this.canvas.height/2-this.canvas.height/10, w = 32, h = 48, frameX = 0, frameY = 1, steps = 5) {
      this.canvas = document.querySelector('canvas');
      this.ctx = this.canvas.getContext('2d');

      this.continuousLeft = false;
      this.continuousRight = false;
      this.continuousDown = false;
      this.continuousUp = false;
      this.continuousD = false;
      this.continuousS = false;
      this.continuousW = false;

      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.FrameX = frameX;
      this.FrameY = frameY;
      this.steps = steps;

      // this.userSprite = new Image();
      // this.userSprite.src = "././pics/hulk.png"; //W: 40, H: 56
      this.aiSprite = new Image();
      this.aiSprite.src = "pics\deadpool.png"; //W: 32, H: 48,
   }
}
import Ball from './Ball.js';

class KineticBall extends Ball {
  constructor(pos,radius,speed) {
    super();
    this.pos = pos;
    this.radius = radius;
    this.speed = speed;
  }

  update(canvas){
    this.pos.add(this.speed);

    if(this.pos.dx > canvas.width - this.radius){
      this.speed.dx = -Math.abs(this.speed.dx)
    }
    if(this.pos.dx < this.radius){
      this.speed.dx = Math.abs(this.speed.dx)
    }

    if(this.pos.dy > canvas.height - this.radius){
      this.speed.dy = -Math.abs(this.speed.dy)
    }
    if(this.pos.dy < this.radius){
      this.speed.dy = Math.abs(this.speed.dy)
    }



  }

  draw(context){
    context.beginPath();
    context.arc(this.pos.dx,this.pos.dy,this.radius,0,2*Math.PI);
    context.stroke();
    context.fill();
  }
}

export default KineticBall;

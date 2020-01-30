class Ball {
  constructor(pos,speed,acceleration,radius,color) {
    this.pos = pos;
    this.radius = radius;
    this.vel = speed;
    this.acc = acceleration;
    this.color = color;
  }

  update(canvas){
    if(this.pos.dx > canvas.width - this.radius){
      this.vel.dx = -Math.abs(this.vel.dx);
      this.pos.dx = canvas.width - this.radius
    }
    if(this.pos.dx< this.radius){
      this.vel.dx = Math.abs(this.vel.dx);
      this.pos.dx = this.radius
    }

    if(this.pos.dy > canvas.height - this.radius){
      this.vel.dy = -Math.abs(this.vel.dy);
      this.pos.dy = canvas.height - this.radius
    }
    if(this.pos.dy< this.radius){
      this.vel.dy = Math.abs(this.vel.dy);
      this.pos.dy = this.radius
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  draw(context){
    context.beginPath();
    context.lineWidth = "5";
    context.fillStyle = this.color;
    context.arc(this.pos.dx,this.pos.dy,this.radius,0,2*Math.PI);
    context.stroke();
    context.fill();
  }
}

export default Ball;

class Ball {
  constructor(pos,radius) {
    this.pos = pos;
    this.radius = radius;
  }

  draw(context){
    context.beginPath();
    context.arc(this.pos.dx,this.pos.dy,this.radius,0,2*Math.PI);
    context.stroke();
    context.fill();
  }
}

export default Ball;

class Point {
  constructor(pos,radius,color) {
    this.pos = pos;
    this.radius = radius;
    this.color = color;
  }

  draw(context){
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.pos.dx,this.pos.dy,this.radius,0,2*Math.PI);
    context.stroke();
    context.fill();
  }
}

export default Point;

import React from 'react'
import Vector2d from './lib/Vector2d.js'
import KineticBall from './lib/KineticBall.js'
import './amp.css';

class ReboundingBall extends React.Component {

  componentDidMount(){
    const canvas = this.refs.canvas
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let ball = new KineticBall(new Vector2d(400,400),100,new Vector2d(1,2));

    function loop(){
      context.clearRect(0,0,canvas.width,canvas.height)
      ball.draw(context);
      ball.update(canvas);
    }

    setInterval(loop,10)

  }

render() {
    return(
      <div>
        <canvas className='canvas' ref="canvas" />
      </div>
    )
  }
}

export default ReboundingBall

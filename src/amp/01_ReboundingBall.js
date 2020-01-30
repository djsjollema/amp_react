import React from 'react'
import Vector2d from './lib/Vector2d.js'
import Ball from './lib/Ball.js'
import './amp.css';

class ReboundingBall extends React.Component {

  componentDidMount(){
    const canvas = this.refs.canvas
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight-30;

    let ball = new Ball(new Vector2d(500,100),new Vector2d(5,0),new Vector2d(0,0.1),30,"white");

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
        <div className="menu">my menu</div>
        <canvas className='canvas' ref="canvas" />
      </div>
    )
  }
}

export default ReboundingBall

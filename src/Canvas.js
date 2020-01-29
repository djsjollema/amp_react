import React from 'react'
import './Canvas.css'
import './amp/Rect.js'

class Canvas extends React.Component {

  componentDidMount(){
    const canvas = this.refs.canvas
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    context.fillRect(0,0,100,100);
    

  }

render() {
    return(
      <div>
        <canvas className='canvas' ref="canvas" />
      </div>
    )
  }
}

export default Canvas

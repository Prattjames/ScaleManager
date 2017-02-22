import React, { Component } from 'react';
import Rnd from 'react-rnd';

const style = {
  textAlign: 'center',
  padding: '40px',
  border: 'solid 3px #fff',
  borderRadius: '5px',
  color: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  backgroundSize: 'cover',
  textShadow: '-1px -2px #fff',
  backgroundRepeat: 'no-repeat',
  position: 'relative'
};

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zIndex: 0,
      dimensions: {
        width: 300,
        height: 500,
        baseWidth: 300,
        baseHeight: 500,
        x: 0,
        y: 0,
        ratio: 1
      }
    }
  }

  handleOnDrag = (e, { position: { left, top }}) => this.setState({ dimensions: { ...this.state.dimensions, x: left, y: top }})

  handleOnResize = (direction, { width, height }) => {
    const nWidth = Math.floor(width)
    const nHeight = Math.floor(height)
    const ratio = nWidth / this.state.dimensions.baseWidth
    this.setState({ dimensions: {
      ...this.state.dimensions,
      width: nWidth,
      height: nHeight,
      ratio: Number(ratio.toFixed(2))
    } })
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          userSelect: 'none'
        }}
      >
        <span
          className="inner"
          style={{
            position: 'absolute',
            width: this.state.dimensions.baseWidth,
            height: `${this.state.dimensions.baseHeight}`,
            backgroundColor: 'rgba(201,166,39, 0.6)',
            overflow: 'hidden',
            pointerEvents: 'none'
          }}
        >
          <img
            style={{
              position: 'absolute',
              top: this.state.dimensions.y,
              left: this.state.dimensions.x,
              width: this.state.dimensions.width,
              height: this.state.dimensions.height
            }}
            src="http://s7g1.scene7.com/is/image/LOREALDPP/?src=is%7BLOREALDPP/LPDMI_ITLOKKS-SS15-INSPI6-look?$pngalpha-w300-h500$%7D&mask=is%7BLOREALDPP/inspiration-look%7D&fmt=png-alpha"
            alt=""
          />
        </span>
        <Rnd
          ref={c => { this.rnd = c; }}
          initial={{
            x: 0,
            y: 0,
            width: this.state.dimensions.width,
            height: this.state.dimensions.height
          }}
          style={style}
          lockAspectRatio
          bounds={'parent'}
          zIndex={this.state.zIndex}
          onResize={this.handleOnResize}
          onDrag={this.handleOnDrag}
        >
        </Rnd>
      </div>
    );
  }
}
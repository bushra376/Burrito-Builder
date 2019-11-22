import React, { Component } from 'react';
import { Layer, Image, Line } from 'react-konva';
import bbqImg from '../images/blotch.png';
import ketchupImg from '../images/splash.png';

class SauceCanvas extends Component {
  state = {
    ketchup: null,
    bbq: null,
  };

  componentDidMount() {
    const imageBbq = new window.Image();
    imageBbq.src = bbqImg;
    imageBbq.onload = () => {
      this.setState({
        bbq: imageBbq
      });
    };
    const imageKetchup = new window.Image();
    imageKetchup.src = ketchupImg;
    imageKetchup.onload = () => {
      this.setState({
        ketchup: imageKetchup
      });
    };
  }

  render() {
    const { type } = this.props;
    if (type === 'hot') {
      return (
        <Layer>
          <Line
            x={210}
            y={10}
            points={
              [5,200,30,120,40,210,60,110,70,220,85,110,95,210,100,120,115,200,125,130,130,200,140,150,150,190,155,180,167,160,170,180]
            }
            stroke={'red'}
            strokeWidth={13}
            lineCap={'round'}
            lineJoin={'round'}
            tension={1}
            rotation={30}
          />
        </Layer>
      );
    }
    if (type === 'bbq') {
      const { bbq } = this.state;
      return (
        <Layer>
          <Image
            image={bbq}
            x={115}
            y={125}
            rotation={10}
            height={120}
            width={180}
          />
        </Layer>
      );
    }
    if (type === 'ketchup') {
      const { ketchup } = this.state;
      return (
        <Layer>
          <Image
            image={ketchup}
            x={100}
            y={120}
            height={150}
            width={180}
          />
        </Layer>
      );
    }
  }
}

export default SauceCanvas;

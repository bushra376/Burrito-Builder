import React, { Component } from 'react';
import { Layer, Image } from 'react-konva';
import beanImg from '../images/singleBean.svg';
import riceImg from '../images/whiteRice.png';
import onionImg from '../images/onion.png';

class ToppingCanvas extends Component {
  state = {
    beans: null,
    rice: null,
    onions: null,
  };

  componentDidMount() {
    const imageBean = new window.Image();
    imageBean.src = beanImg;
    imageBean.onload = () => {
      this.setState({
        beans: imageBean
      });
    };
    const imageRice = new window.Image();
    imageRice.src = riceImg;
    imageRice.onload = () => {
      this.setState({
        rice: imageRice
      });
    };
    const imageOnion = new window.Image();
    imageOnion.src = onionImg;
    imageOnion.onload = () => {
      this.setState({
        onions: imageOnion
      });
    };
  }

  render() {
    const { type, beansLocation, riceLocation, onionLocation } = this.props;
    if (type === 'beans') {
      const { beans } = this.state;
      return (
        <Layer>
          {beansLocation.map((loc, idx) => {
            return (
              <Image key={idx} image={beans} x={loc.x} y={loc.y} rotation={45} height={20} width={25}/>
            )
          })}
        </Layer>
      );
    }
    if (type === 'rice') {
      const { rice } = this.state;
      return (
        <Layer>
          {riceLocation.map((loc, idx) => {
            return (
              <Image key={idx} image={rice} x={loc.x} y={loc.y} rotation={12} height={150} width={250}/>
            )
          })}
        </Layer>
      );
    }
    if (type === 'onions') {
      const { onions } = this.state;
      return (
        <Layer>
          {onionLocation.map((loc, idx) => {
            return (
              <Image key={idx} image={onions} x={loc.x} y={loc.y} rotation={12} height={70} width={70}/>
            )
          })}
        </Layer>
      );
    }
  }
}

export default ToppingCanvas;

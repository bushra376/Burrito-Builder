import React, { Component } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import BaseCanvas from './BaseCanvas';
import ToppingCanvas from './ToppingCanvas';
import SauceCanvas from './SauceCanvas';
import plateImg from '../images/board.png';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';

const styles = {
	Burrito: {
		display: 'flex',
		flex: 1,
		'justify-content': 'center',
	},
};

class Burrito extends Component {
	state = {
    plate: null,
	};

	componentDidMount() {
    const imagePlate = new window.Image();
    imagePlate.src = plateImg;
    imagePlate.onload = () => {
      this.setState({
        plate: imagePlate
      });
		};
	}
	
	render() {
		const {
			burrittoBase,
			burrittoToppings,
			burrittoSauce,
			beansLocation,
			riceLocation,
			onionLocation,
			classes,
		} = this.props;
		const { plate } = this.state;
		return (
			<div className={classes.Burrito}>
				<Stage width={500} height={420}>
					<Layer>
					<Image
            image={plate}
            x={10}
            y={90}
            rotation={10}
            height={210}
            width={460}
          />
					</Layer>
						{burrittoBase.map((base, idx) => {
							return (base.isPresent && <BaseCanvas type={base.type} key={idx}/>);
						})}
						{burrittoSauce.map((top, idx) => {
							return (top.isPresent && 
								<SauceCanvas
									type={top.type}
									key={idx}
								/>
							);
						})}
						{burrittoToppings.map((top, idx) => {
							return (top.isPresent && 
								<ToppingCanvas
									type={top.type}
									key={idx}
									beansLocation={beansLocation}
									riceLocation={riceLocation}
									onionLocation={onionLocation}
								/>
							);
						})}
				</Stage>
			</div>
		);
	}
}

const mapToState = state => {
  const { burritto } = state;
  return {
		burrittoBase: burritto.base,
		burrittoToppings: burritto.toppings,
		burrittoSauce: burritto.sauce,
		beansLocation: burritto.toppings.filter(top => top.type === 'beans')[0].location,
		riceLocation: burritto.toppings.filter(top => top.type === 'rice')[0].location,
		onionLocation: burritto.toppings.filter(top => top.type === 'onions')[0].location,
  }
};
const mapToDispatch = dispatch => {
  return {}
};

export default withStyles(styles)(connect(mapToState, mapToDispatch)(Burrito));
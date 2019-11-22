import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import mexicoFoodImg from '../images/mexicoFood.jpg';
import menuOrder from '../images/menuOrder.jpg';

const styles = {
  menu: {
    backgroundImage: `url(${mexicoFoodImg})`,
    backgroundSize: '100% 160%',
    'background-position': '0% 100%',
    'background-repeat': 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Anton, sans-serif',
    height: '93vh',
    'justify-content': 'center',
    width: '100vw',
  },
  optionContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    zIndex: 2,
  },
  menuImage: {
    borderRadius: '25px',
    height: '90vh',
    width: '90vw',
    zIndex: 2,
  },
  blur: {
    'box-shadow': 'inset 0 0 0 3000px rgba(0,0,0,0.3)',
    filter: 'blur(10px)',
    height: '93vh',
    position: 'absolute',
    width: '100vw',
    zIndex: 1,
  }
};

function Unsure ({ classes }) {
  return (
    <div className={classes.menu}>
      <img className={classes.menuImage} src={menuOrder} alt="foodImage" />
    </div>
  );
}

export default withStyles(styles)(Unsure);

import React, { Component } from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import mexicoFoodImg from '../images/mexicoFood.jpg';
import menuImg from '../images/menu.jpg';
import makeOwnImg from '../images/createOwn.jpg';
import { updatePage } from '../reduxStore/viewAction';

const styles = {
  LandingPage: {
    backgroundImage: `url(${mexicoFoodImg})`,
    backgroundSize: '100% 160%',
    'background-position': '0% 100%',
    'background-repeat': 'no-repeat',
    display: 'flex',
    'flex-direction': 'column',
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
  option: {
    border: '1px solid #333333',
    borderRadius: '25px',
    width: '40vw',
    height: '60vh',
    filter: 'grayscale(50%)',
    '&:hover': {
      boxShadow: '5px 5px 10px #333333',
      filter: 'grayscale(0%)',
    },
  },
  menu: {
    backgroundImage: `url(${menuImg})`,
    backgroundSize: '67vw 72vh',
    'background-position': '50% 39%',
  },
  own: {
    backgroundImage: `url(${makeOwnImg})`,
    backgroundSize: '38vw 65vh',
    'background-position': '50% 38%',
  },
  optionTextContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: '45px',
    marginTop: '30px',
    zIndex: 2,
  },
  optionText: {
    '-webkit-text-stroke': '1px #444444',
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

class LandingPage extends Component {
  handleClick = pageName => {
    const { changePage } = this.props;
    changePage(pageName);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.LandingPage}>
        <div className={classes.optionContainer}>
          <div className={`${classes.option} ${classes.menu}`} onClick={() => this.handleClick('menu')} ></div>
          <div className={`${classes.option} ${classes.own}`} onClick={() => this.handleClick('own')} ></div>
        </div>
        <div className={classes.optionTextContainer}>
          <div className={`${classes.optionText}`}>Choose From Menu</div>
          <div className={classes.optionText}>Create Your Own</div>
        </div>
        <div className={classes.blur} />
      </div>
    );
  }
}

const mapToState = state => {
  return {}
};
const mapToDispatch = dispatch => {
  return {
    changePage: pageName => dispatch(updatePage(pageName)),
  }
};

export default withStyles(styles)(connect(mapToState, mapToDispatch)(LandingPage));

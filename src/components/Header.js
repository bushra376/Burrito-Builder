import React, { Component } from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import { updatePage } from '../reduxStore/viewAction';

const styles = {
  Header: {
    'border-bottom': '1px solid lightgray',
    color: '#ff0066',
    fontSize: '45px',
    'text-shadow': '5px 5px #000000',
    'font-family': 'Anton, sans-serif',
    'background-image': 'url(https://as1.ftcdn.net/jpg/01/71/93/38/500_F_171933832_82Rpz4mYT2NJvHeXVRwCVKRABIhzN3MM.jpg)',
  },
  Home: {
    position: 'absolute',
    top: '25px',
    right: '0vw',
    'font-size': '30px',
    cursor: 'pointer',
  },
};

class Header extends Component {
  handleClick = pageName => {
    const { changePage } = this.props;
    changePage(pageName);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Header}>
        <div>BurrEATo</div>
        <div className={classes.Home} onClick={() => this.handleClick('landing')} >Home</div>
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
  
  export default withStyles(styles)(connect(mapToState, mapToDispatch)(Header));
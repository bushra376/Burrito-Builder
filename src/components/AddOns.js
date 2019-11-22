import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { updateView } from '../reduxStore/viewAction';

const styles = {
  root: {
    opacity: 0.4,
    padding: '10px 90px',
    'margin-right': '20px',
    'border-radius': '30px',
  },
  buttonGroup: {
    paddingTop: '40px',
  },
  selectedBtn: {
    opacity: 1,
  },
  Sauce: {
    fontFamily: 'Anton, sans-serif'
  }
};

class AddOns extends Component {
  state = {
    Base: 'selectedBtn',
    Toppings: '',
    Sauce: ''
  }

  handleClick = view => {
    const { updateView } = this.props;
    updateView(view);
    this.setState({
      Base: '',
      Toppings: '',
      Sauce: '',
      [view]: 'selectedBtn',
    });
  };

  render() {
    const { classes } = this.props;
    const { Base, Toppings, Sauce } = this.state;
    return (
      <ButtonGroup
        className={classes.buttonGroup}
        variant="contained"
        color="secondary"
        size="large"
        aria-label="large contained secondary button group"
      >
        <Button className={`${classes[Base]} ${classes.root}`} onClick={() => this.handleClick('Base')}>Base</Button>
        <Button className={`${classes[Toppings]} ${classes.root}`} onClick={() => this.handleClick('Toppings')}>Toppings</Button>
        <Button className={`${classes[Sauce]} ${classes.root}`} onClick={() => this.handleClick('Sauce')}>Sauce</Button>
      </ButtonGroup>
    );
    }
  }

const mapToState = state => {
  return {}
};
const mapToDispatch = dispatch => {
  return {
    updateView: view => dispatch(updateView(view)),
  }
};

export default withStyles(styles)(connect(mapToState, mapToDispatch)(AddOns));

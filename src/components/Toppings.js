import React, { Component } from 'react';
import { connect } from "react-redux";
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { updateToppings } from '../reduxStore/burritoAction';

const styles = {
  root: {
    color: 'white',
  },
  Toppings: {
    fontFamily: 'Anton, sans-serif'
  },
  toppingText: {
    paddingTop: '20px',
  },
};

class Toppings extends Component {
  handleChange = toppingName => {
    const { changeTopping } = this.props;
    changeTopping(toppingName);
  };

  render() {
    const { haveBeans, haveRice, haveOnions, classes } = this.props;
    return (
      <div className={classes.Toppings}>
        <h1 className={classes.toppingText}>Add Toppings</h1>
        <FormControl component="fieldset">
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                className={classes.root}
                checked={haveBeans}
                onChange={() => this.handleChange('beans')} value="beans"
              />
            }
            label="Beans"
          />
          <FormControlLabel
            control={
              <Checkbox
                className={classes.root}
                checked={haveRice}
                onChange={() => this.handleChange('rice')} value="rice"
              />
            }
            label="Rice"
          />
          <FormControlLabel
            control={
              <Checkbox
                className={classes.root}
                checked={haveOnions}
                onChange={() => this.handleChange('onions')} value="onions"
              />
            }
            label="Onions"
          />
        </FormGroup>
      </FormControl>
      </div>
    );
    }
}

const mapToState = state => {
  const { burritto } = state;
  return {
    haveBeans: burritto.toppings.filter(top => top.type === 'beans')[0].isPresent,
    haveRice: burritto.toppings.filter(top => top.type === 'rice')[0].isPresent,
    haveOnions: burritto.toppings.filter(top => top.type === 'onions')[0].isPresent,
  }
};
const mapToDispatch = dispatch => {
  return {
    changeTopping: toppingName => dispatch(updateToppings(toppingName)),
  }
};

export default withStyles(styles)(connect(mapToState, mapToDispatch)(Toppings));
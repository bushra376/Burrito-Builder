import React, { Component } from 'react';
import { connect } from "react-redux";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import { updateBase } from '../reduxStore/burritoAction';

const styles = {
  root: {
    color: 'white',
  },
  Base: {
    fontFamily: 'Anton, sans-serif'
  },
  baseText: {
    paddingTop: '20px',
  },
};

class Base extends Component {
  handleChange = event => {
    const { changeBase } = this.props;
    changeBase(event.target.value);
  };
  
  render() {
    const { currentBase, classes } = this.props;
    return (
      <div className={classes.Base}>
        <h1 className={classes.baseText}>Select your Burrito Bread</h1>
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="base-options"
            name="base"
            value={currentBase}
            onChange={this.handleChange}
          >
            <FormControlLabel value="white" control={<Radio className={classes.root}/>} label="White" />
            <FormControlLabel value="brown" control={<Radio className={classes.root}/>} label="Brown" />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

const mapToState = state => {
  const { burritto } = state;
  return {
    currentBase: (burritto.base.filter(burr => burr.isPresent === true))[0].type,
  }
};
const mapToDispatch = dispatch => {
  return {
    changeBase: base => dispatch(updateBase(base)),
  }
};

export default withStyles(styles)(connect(mapToState, mapToDispatch)(Base));
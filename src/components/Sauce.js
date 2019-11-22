import React, { Component } from 'react';
import { connect } from "react-redux";
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { updateSauce } from '../reduxStore/burritoAction';

const styles = {
  root: {
    color: 'white',
  },
  Sauce: {
    fontFamily: 'Anton, sans-serif'
  },
  sauceText: {
    paddingTop: '20px',
  },
};

class Sauce extends Component {
  handleChange = sauceName => {
    const { changeSauce } = this.props;
    changeSauce(sauceName);
  };

  render() {
    const { haveKetchup, haveBbq, haveHot, classes } = this.props;
    return (
      <div className={classes.Sauce}>
        <h1 className={classes.sauceText}>Add Sauce</h1>
        <FormControl component="fieldset">
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  className={classes.root}
                  checked={haveKetchup}
                  onChange={() => this.handleChange('ketchup')} value="ketchup"
                />
              }
              label="ketchup"
            />
            <FormControlLabel
              control={
                <Checkbox
                  className={classes.root}
                  checked={haveBbq}
                  onChange={() => this.handleChange('bbq')} value="bbq"
                />
              }
              label="Bbq"
            />
            <FormControlLabel
              control={
                <Checkbox
                  className={classes.root}
                  checked={haveHot}
                  onChange={() => this.handleChange('hot')} value="hot"
                />
              }
              label="Hot-Sauce"
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
    haveKetchup: burritto.sauce.filter(sauce => sauce.type === 'ketchup')[0].isPresent,
    haveBbq: burritto.sauce.filter(sauce => sauce.type === 'bbq')[0].isPresent,
    haveHot: burritto.sauce.filter(sauce => sauce.type === 'hot')[0].isPresent,
  }
};
const mapToDispatch = dispatch => {
  return {
    changeSauce: sauceName => dispatch(updateSauce(sauceName)),
  }
};

export default withStyles(styles)(connect(mapToState, mapToDispatch)(Sauce));
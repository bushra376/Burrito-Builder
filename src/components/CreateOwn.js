import React, { Component } from 'react';
import { connect } from "react-redux";
import AddOns from './AddOns';
import Burrito from './Burrito';
import Base from './Base';
import Toppings from './Toppings';
import Sauce from './Sauce';

class CreateOwn extends Component {
  render() {
    const { currAddOnView } = this.props;
    return (
      <div className="CreateOwn">
        <Burrito />
        <AddOns />
        {currAddOnView === 'Base' && <Base />}
        {currAddOnView === 'Toppings' && <Toppings />}
        {currAddOnView === 'Sauce' && <Sauce />}
      </div>
    );
  }
}

const mapToState = state => {
  const { view } = state;
  return {
    currAddOnView: view.currentAddOnView,
  }
};
const mapToDispatch = dispatch => {
  return {}
};

export default connect(mapToState, mapToDispatch)(CreateOwn);

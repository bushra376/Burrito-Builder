import React, { Component } from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import CreateOwn from './components/CreateOwn';
import LandingPage from './components/LandingPage';
import Menu from './components/Menu';

const styles = {
  App: {
    'text-align': 'center',
    'background-color': '#161616',
    width: '100vw',
    height: '100vh',
    color: '#f8f8f8',
  }
};

class App extends Component {
  render() {
    const { currPage, classes } = this.props;
    return (
      <div className={classes.App}>
        <Header />
        {currPage === 'landing' && <LandingPage />}
        {currPage === 'own' && <CreateOwn />}
        {currPage === 'menu' && <Menu />}
      </div>
    );
  }
}

const mapToState = state => {
  const { view } = state;
  return {
    currPage: view.currentPage,
  }
};
const mapToDispatch = dispatch => {
  return {}
};

export default withStyles(styles)(connect(mapToState, mapToDispatch)(App));

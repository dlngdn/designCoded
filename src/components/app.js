import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getInitialData } from '../actions/index';

import Sidebar from '../components/sidebar';
import Main from '../components/main';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="video-app">
        <div className="wrapper">
          <div className={`navigation-controller ${this.props.navOpen ? 'open' : ''}`}>
            <Sidebar />
            <Main />
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getInitialData}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

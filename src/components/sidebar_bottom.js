import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getInitialData } from '../actions/index';

import Doc from './doc';

class SidebarBottom extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getInitialData();
  }


  render() {
    return (
      <div className="sidebar-section">
        <div className="sidebar-header">
          <div className="sidebar-header-title">
            Frequently Viewed
          </div>
        </div>
        <div className="animated-collection">
          {this.props.currentDocument[2].map((doc) => {
            return (
              <Doc selected={this.props.currentDocument[0] === doc.id} title={doc.name} id={doc.id} key={doc.id}/>
            )
          })}
        </div>
      </div>
    )
  }
}


function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getInitialData}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarBottom);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectDocument } from '../actions/index';

class NavigationControllerPath extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navigation-controller-path bottom-align">
        <div className="nav-path">
          <a href="" className="nav-path-component">
            Private
          </a>
          <div className="nav-path-separator">
            <svg viewBox="0 0 10 10" preserveAspectRatio="xMidYMid">
              <path d="M4.993,7.993A1,1,0,0,1,4.285,7.7L0.28,3.7A1,1,0,1,1,1.7,2.291l3.3,3.29,3.3-3.29A1,1,0,0,1,9.706,3.7L5.7,7.7A1,1,0,0,1,4.993,7.993Z"></path>
            </svg>
          </div>
          <div className="nav-path-title-container">
            
            <span className="nav-path-title">
              {this.props.currentDocument[1]}
            </span>
          </div>
          <div className="nav-path-star clickable">
            <svg viewBox="0 0 18 18" preserveAspectRatio="xMidYMid">
              <path d="M9.4,1.747h0M9,2.554L10.614,5.83a1.521,1.521,0,0,0,1.141.832l3.579,0.52L12.757,9.693a1.545,1.545,0,0,0-.442,1.367l0.612,3.568L9.7,12.931a1.5,1.5,0,0,0-1.4,0l-3.23,1.7L5.68,11.06a1.543,1.543,0,0,0-.442-1.368L2.66,7.182l3.58-.52a1.521,1.521,0,0,0,1.141-.833L9,2.554M9,1a0.529,0.529,0,0,0-.48.3L6.5,5.38a0.537,0.537,0,0,1-.4.292l-4.507.654a0.534,0.534,0,0,0-.3.911l3.261,3.177a0.534,0.534,0,0,1,.154.473l-0.77,4.486a0.533,0.533,0,0,0,.776.563l4.031-2.118a0.535,0.535,0,0,1,.5,0l4.031,2.118a0.533,0.533,0,0,0,.776-0.563l-0.77-4.486a0.536,0.536,0,0,1,.154-0.473L16.7,7.238a0.534,0.534,0,0,0-.3-0.911l-4.506-.654a0.536,0.536,0,0,1-.4-0.292L9.477,1.3A0.528,0.528,0,0,0,9,1H9Z">
              </path>
            </svg>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectDocument}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationControllerPath);

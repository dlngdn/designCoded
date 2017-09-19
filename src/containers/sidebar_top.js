import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { startVideo } from '../actions/index';

class SidebarTop extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.deadClick = this.deadClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    this.props.startVideo();
  }

  deadClick(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="sidebar-section">
        <a onClick={this.deadClick}>
          <div className="sidebar-item">
            <div className="sidebar-item-icon">
              <svg viewBox="0 0 18 18" preserveAspectRatio="xMidYMid" ><path d="M15,17H3a2,2,0,0,1-2-2V3A2,2,0,0,1,3,1H15a2,2,0,0,1,2,2V15A2,2,0,0,1,15,17ZM6,3H3V6H6V3Zm9,0H7V4h8V3ZM7,5V6h6V5H7Zm8,3H3v7H15V8Z" data-reactid=".0.1.0.0.1.0.1.1:$navigation=22.0.0.0.0"></path></svg>
            </div>
            <div className="sidebar-item-text">
              <div className="sidebar-item-title">
                Updates
              </div>
            </div>
          </div>
        </a>
        <a onClick={this.deadClick}>
          <div className="sidebar-item">
            <div className="sidebar-item-icon">
              <svg viewBox="0 0 18 18" preserveAspectRatio="xMidYMid" ><path d="M17,16a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1L0,10A1,1,0,0,1,1,9H17a1,1,0,0,1,1,1Zm-5.6-5H6.6a0.508,0.508,0,1,0,0,1h4.8A0.508,0.508,0,1,0,11.4,11ZM5.135,1.5A1,1,0,0,1,6,1h6a1,1,0,0,1,.865.5L16,8H2ZM12,2.5A0.5,0.5,0,0,0,11.5,2h-5a0.5,0.5,0,0,0-.5.5V3h6V2.5Zm1,2A0.5,0.5,0,0,0,12.5,4h-7a0.5,0.5,0,0,0-.5.5V5h8V4.5ZM14,7V6.5A0.5,0.5,0,0,0,13.5,6h-9a0.5,0.5,0,0,0-.5.5V7H14Z"></path></svg>
            </div>
            <div className="sidebar-item-text">
              <div className="sidebar-item-title">
                Folders
              </div>
            </div>
          </div>
        </a>
        <a onClick={this.deadClick}>
          <div className="sidebar-item">
            <div className="sidebar-item-icon">
              <svg viewBox="0 0 18 18" preserveAspectRatio="xMidYMid"><path d="M10.5,5.741V9.5h1.75a0.75,0.75,0,0,1,0,1.5H9.75A0.75,0.75,0,0,1,9,10.25V5.741A0.75,0.75,0,0,1,10.5,5.741ZM10,17a7.96,7.96,0,0,1-5.494-2.2,1,1,0,0,1,1.377-1.451A6,6,0,1,0,4.1,8H5.565A0.424,0.424,0,0,1,5.9,8.69L3.335,11.844a0.437,0.437,0,0,1-.674,0L0.093,8.69A0.424,0.424,0,0,1,.43,8H2.069A8,8,0,1,1,10,17Z" ></path></svg>
            </div>
            <div className="sidebar-item-text">
              <div className="sidebar-item-title">
                History
              </div>
            </div>
          </div>
        </a>
        <a onClick={this.onClick} className="click-on-this">
          <div className="sidebar-item">
            <div className="sidebar-item-icon">
              <svg viewBox="0 0 18 18" preserveAspectRatio="xMidYMid">
                <path d="M12.1,7.4c0.1-0.1,0.1-0.1,0.2-0.2c0.9-0.9,1.8-1.8,2.7-2.7c0.2-0.2,0.3-0.3,0.6-0.2c0.2,0,0.4,0.2,0.4,0.4 c0,0.1,0,0.2,0,0.2c0,2.7,0,5.5,0,8.2c0,0.4-0.2,0.7-0.6,0.6c-0.1,0-0.3-0.1-0.4-0.2c-0.9-0.9-1.8-1.8-2.7-2.7 c-0.1-0.1-0.1-0.1-0.2-0.2c0,0.1,0,0.2,0,0.3c0,0.5,0,1-0.1,1.5c-0.2,0.9-1.1,1.6-2,1.6c-1.9,0-3.8,0-5.8,0c-1,0-2.1-1-2.1-2 c0-2,0-4,0-6c0-1,1-1.9,2.1-1.9C6,4,8,4,9.9,4C11,4,12,5,12,6.1C12,6.5,12,7,12.1,7.4C12,7.4,12.1,7.4,12.1,7.4z"/>
              </svg>
            </div>
            <div className="sidebar-item-text">
              <div className="sidebar-item-title">
                Start a Video Call
              </div>
            </div>
          </div>
        </a>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({startVideo}, dispatch);
}

export default connect(null, mapDispatchToProps)(SidebarTop);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { minimizeVideo, endVideo } from '../actions/index';

class VideoToolbar extends Component {
  constructor(props) {
    super(props);
    this.minimizeClick = this.minimizeClick.bind(this);
    this.endClick = this.endClick.bind(this);
  }

  minimizeClick(event) {
    event.preventDefault();
    this.props.minimizeVideo();
  }

  endClick(event) {
    event.preventDefault();
    this.props.endVideo();
  }



  render() {
    return (
      <div className="video-controller-toolbar">
        <div className="video-controller-toolbar-title">
          Video Call with Megan
        </div>
        <div className="video-controller-toolbar-bottom">
          <div className="video-controller-toolbar-bottom-left">
            <div className="video-status-container">
              <div className="video-status"></div>
            </div>
            <div className="video-status-time">5:24</div>
          </div>
          <div className="video-controller-toolbar-bottom-center">
            <div className="video-controller-toolbar-bottom-button-group">
              <button className="button button-flex border clickable mute-button  " aria-live="off" aria-atomic="false" aria-haspopup="true" >
                <div className="button-icon">
                  <svg viewBox="0 0 18 18" preserveAspectRatio="xMidYMid" >
                    <path d="M11.1,5.5c0,0.9,0,1.8,0,2.7c0,1.4-1.2,2.6-2.6,2.8C7,11.3,5.7,10.5,5.1,9.1C5,8.8,4.9,8.4,4.9,8.1 c0-1.6,0-3.3,0-4.9c0-1.6,1.4-3.3,3.5-3.1c1.5,0.2,2.7,1.4,2.7,2.9C11.1,3.8,11.1,4.7,11.1,5.5C11.1,5.5,11.1,5.5,11.1,5.5z"/>
                    <path d="M8,16c-1,0-2,0-2.9,0c-0.4,0-0.7-0.2-0.8-0.6c0-0.4,0.2-0.7,0.7-0.7c0.7,0,1.4,0,2.1,0c0.3,0,0.3-0.1,0.3-0.3 c0-0.3,0.1-0.6-0.1-0.8c-0.1-0.2-0.5-0.1-0.7-0.2c-2.2-0.7-3.6-2.1-4-4.4C2.4,8.2,2.5,7.4,2.5,6.7c0-0.3,0.3-0.6,0.6-0.6 c0.3,0,0.6,0.3,0.6,0.6c0,0.4,0,0.8,0,1.3c0,2.6,2.3,4.6,4.9,4.2c1.7-0.2,3.2-1.6,3.5-3.2c0.1-0.7,0.1-1.4,0.1-2.2 c0-0.4,0.2-0.6,0.5-0.7c0.4-0.1,0.8,0.2,0.8,0.5c0,1,0.1,2-0.2,3c-0.7,2-2,3.2-4,3.7c-0.6,0.2-0.7,0.1-0.6,0.8 c0,0.6-0.1,0.5,0.5,0.5c0.6,0,1.3,0,1.9,0c0.3,0,0.5,0.2,0.6,0.5c0.1,0.3,0,0.6-0.3,0.7C11.3,16,11.1,16,10.9,16C9.9,16,9,16,8,16z"/>
                  </svg>
                </div>
                <div className="button-text">
                  <span>Mute</span>
                </div>
              </button>
              <button className="button button-flex border clickable hide-button  " aria-live="off" aria-atomic="false" aria-haspopup="true" >
                <div className="button-icon">
                  <svg viewBox="0 0 18 18" preserveAspectRatio="xMidYMid" >
                    <path d="M12.1,7.4c0.1-0.1,0.1-0.1,0.2-0.2c0.9-0.9,1.8-1.8,2.7-2.7c0.2-0.2,0.3-0.3,0.6-0.2c0.2,0,0.4,0.2,0.4,0.4 c0,0.1,0,0.2,0,0.2c0,2.7,0,5.5,0,8.2c0,0.4-0.2,0.7-0.6,0.6c-0.1,0-0.3-0.1-0.4-0.2c-0.9-0.9-1.8-1.8-2.7-2.7 c-0.1-0.1-0.1-0.1-0.2-0.2c0,0.1,0,0.2,0,0.3c0,0.5,0,1-0.1,1.5c-0.2,0.9-1.1,1.6-2,1.6c-1.9,0-3.8,0-5.8,0c-1,0-2.1-1-2.1-2 c0-2,0-4,0-6c0-1,1-1.9,2.1-1.9C6,4,8,4,9.9,4C11,4,12,5,12,6.1C12,6.5,12,7,12.1,7.4C12,7.4,12.1,7.4,12.1,7.4z"/>
                  </svg>
                </div>
                <div className="button-text">
                  <span>Hide Video</span>
                </div>
              </button>
              <button onClick={this.minimizeClick} className="button button-flex border clickable minimize-button  " aria-live="off" aria-atomic="false" aria-haspopup="true" >
                <div className="button-icon">
                  <svg viewBox="0 0 18 18" preserveAspectRatio="xMidYMid" >
                    <path d="M11.4,4.2c0.7-0.7,1.3-1.4,1.9-2.1c0.3-0.3,0.6-0.6,0.9-0.9c0.3-0.3,0.4-0.3,0.7,0c0.3,0.3,0.6,0.5,0.9,0.8 c0.3,0.3,0.3,0.4,0,0.7c-0.9,0.9-1.7,1.9-2.6,2.8c-0.2,0.2-0.2,0.3,0,0.5c0.4,0.3,0.7,0.6,1,1c0.2,0.2,0.3,0.5,0.2,0.7 C14.3,7.9,14.1,8,13.8,8c-1.3,0-2.7,0.1-4,0.1c-0.5,0-0.7-0.2-0.7-0.7c0-1.3-0.1-2.7-0.1-4C9,3.2,9.1,3,9.3,2.8 C9.6,2.7,9.9,2.8,10.1,3c0.3,0.3,0.7,0.6,1,1C11.2,4,11.3,4.1,11.4,4.2z"/>
                    <path d="M6.4,8c0.7,0,1.3,0,2,0c0.5,0,0.7,0.2,0.7,0.7c0,1.3,0,2.6,0,4c0,0.3-0.1,0.6-0.4,0.7c-0.3,0.1-0.5,0-0.7-0.2 c-0.3-0.4-0.7-0.7-1-1c-0.2-0.2-0.3-0.1-0.4,0c-0.9,0.9-1.8,1.8-2.7,2.7c-0.3,0.3-0.4,0.3-0.8,0c-0.3-0.3-0.5-0.5-0.8-0.8 c-0.3-0.3-0.3-0.4,0-0.7c0.9-0.9,1.8-1.8,2.7-2.7c0.2-0.2,0.2-0.3,0-0.5c-0.4-0.3-0.7-0.7-1-1C3.7,8.9,3.6,8.7,3.8,8.4 C3.9,8.1,4.1,8,4.4,8C5,8,5.7,8,6.4,8z"/>
                  </svg>
                </div>
                <div className="button-text">
                  <span>Minimize</span>
                </div>
              </button>
              <button className="button button-flex border clickable add-button  " aria-live="off" aria-atomic="false" aria-haspopup="true" >
                <div className="button-icon">
                  <svg viewBox="0 0 18 18" preserveAspectRatio="xMidYMid" >
                  <path d="M18,12.8c-0.1-3.1-3-3.3-3-3.3c-0.6-0.3-0.9-1.2-0.9-1.2c0.7-0.8,0.7-1.9,0.7-1.9C15.3,3.8,15,1.9,12,2v0 c0,0,0,0,0,0c0,0,0,0,0,0v0c-2,0.2-2.3,2.2-1.6,4.6c0,0,0.5,1,1.2,1.8c0,0-0.2,0.9-0.8,1.2c0,0-2.8,0.1-2.9,3.2 c0,0,1.5,1.2,4.7,1.2h0.8C16.5,14,18,12.8,18,12.8z"/>
                  <rect x="2.4" y="4.5" transform="matrix(2.766859e-11 -1 1 2.766859e-11 -4.4814 10.9984)" width="1.7" height="6.5"/>
                  <rect x="2.4" y="4.5" transform="matrix(-1 -7.151936e-11 7.151936e-11 -1 6.5169 15.4798)" width="1.7" height="6.5"/>
                  </svg>
                </div>
                <div className="button-text">
                  <span>Add Person</span>
                </div>
              </button>
            </div>

          </div>
          <div className="video-controller-toolbar-bottom-right">
            <button onClick={this.endClick} className="button button-flex border clickable end-button  " aria-live="off" aria-atomic="false" aria-haspopup="true" >
              <div className="button-icon">
                <svg viewBox="0 0 18 18" preserveAspectRatio="xMidYMid" >
                  <path d="M1.2,6.8C1.8,6.2,2.5,6,3.1,5.6c3.1-1.5,6.3-1.5,9.5-0.9c1.3,0.3,2.5,0.9,3.6,1.6c1.2,0.8,1.7,2,1.8,3.4 c0,0.8-0.5,1.3-1,1.8c-0.1,0.1-0.3,0.1-0.5,0.1c-0.5-0.1-1.1-0.3-1.6-0.4c-0.5-0.1-1-0.2-1.4-0.4c-0.5-0.1-0.7-0.3-0.7-0.8 c0-0.5,0.1-1,0.1-1.5c0-0.6-0.1-0.8-0.7-0.9C10.5,7,8.7,6.8,6.9,7.2C6.5,7.3,6,7.5,5.5,7.6C5.1,7.7,5,7.9,5,8.3c0,0.5,0.1,1,0.1,1.5 c0,0.7-0.1,0.9-0.8,1C3.5,11,2.8,11.3,2,11.5c-1,0.3-0.9,0.3-1.6-0.7c-0.6-0.9-0.4-1.7,0-2.6C0.5,7.7,1.2,6.8,1.2,6.8z"/>
                </svg>
              </div>
              <div className="button-text">
                <span>End Call</span>
              </div>
            </button>
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
  return bindActionCreators({minimizeVideo, endVideo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoToolbar);

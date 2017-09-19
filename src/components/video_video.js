import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { maximizeVideo } from '../actions/index';

class VideoVideo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="video-video">
        <div className="video-left vid">
          <img src={`${this.props.data.environment}/images/megan.jpg`}/>
          <span className="video-name">Megan</span>
        </div>
        <div className="video-right vid">
          <img src={`${this.props.data.environment}/images/you.jpg`}/>
          <span className="video-name">You</span>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({maximizeVideo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoVideo);

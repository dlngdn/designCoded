import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { startVideo } from '../actions/index';

import NavigationControllerPath from './navigation_controller_path';
import NavigationControllerButtons from './navigation_controller_buttons';
import DocumentContainer from './document_container';
import VideoToolbar from './video_toolbar';
import ViewedDuringVideo from './viewed_during_video';
import VideoVideo from './video_video';
import VideoControllerToolbarMinimized from './video_controller_toolbar_minimized';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`navigation-controller-main ${this.props.videoOpen[0] ? 'video-call': ''} ${this.props.videoMinimized ? 'minimized ': 'maximized'}` }>
        <div className="video-controller">
          <VideoToolbar />
          <div className="video-body clearfix">
            <ViewedDuringVideo />
            <VideoVideo />
          </div>
        </div>
        <div className="navigation-controller-toolbar">
          <NavigationControllerPath />
          <NavigationControllerButtons />
        </div>
        <div className="navigation-controller-body scrollable">
          <DocumentContainer />
        </div>

        <div className="video-controller-minimized">
          <VideoControllerToolbarMinimized />
          <div className="video-body-minimized">
            <ViewedDuringVideo />
            <div className="video-container-mimimized">
              <img src={`${this.props.data.environment}/images/you.jpg`}/>
              <span className="video-name">You</span>
            </div>
            <div className="video-container-mimimized">
              <img src={`${this.props.data.environment}/images/megan.jpg`}/>
              <span className="video-name">Megan</span>
            </div>

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
  return bindActionCreators({startVideo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

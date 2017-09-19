import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { maximizeVideo } from '../actions/index';

import ViewedItem from './viewed_item';

class ViewedDuringVideo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const count = 0;
    return (
      <div className="viewed-during-video">
        <div className="viewed-during-video-header">
          Viewed During Call
        </div>
        <ul className="viewed-during-list">
          {this.props.videoOpen[2].map((doc,count) => {
            count++;
            return (
              <ViewedItem count={count} name={doc.name} id={doc.id} key={doc.id}/>
            )
          })}
        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewedDuringVideo);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectDocument } from '../actions/index';

class ViewedItem extends Component {
  constructor(props) {
    super(props);
    this.selectClick = this.selectClick.bind(this);
  }

  selectClick(event){
    const payload = {
      id: this.props.id,
      name: this.props.name
    }
    this.props.selectDocument(payload);
  }

  render() {

    return (
          <li onClick={this.selectClick} className={`click-on-this viewed-during-item ${this.props.count === 1 ? 'selected viewers1' : 'viewers0'}`}>
            <div className="viewed-during-icon">
              <svg viewBox="0 0 18 18" preserveAspectRatio="xMidYMid" ><path d="M14,17H4a1,1,0,0,1-1-1V7H7.5A1.5,1.5,0,0,0,9,5.5V1h5a1,1,0,0,1,1,1V16A1,1,0,0,1,14,17ZM7,6H3L8,1V5A1,1,0,0,1,7,6Z" ></path></svg>
            </div>
            <div className="viewed-during-title">
              {this.props.name}
            </div>
            <div className="users-viewing">
              {this.props.count === 1 &&
                <img src={`${this.props.data.environment}/images/meg-avatar.png`}/>
              }

            </div>
          </li>
    )
  }
}

function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectDocument}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewedItem);

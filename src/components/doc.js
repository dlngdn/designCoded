import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectDocument } from '../actions/index';

class Doc extends Component {
  constructor(props) {
    super(props);
    this.selectClick = this.selectClick.bind(this);
  }

  selectClick(event){
    event.preventDefault();
    const payload = {
      id: this.props.id,
      name: this.props.title
    }
    this.props.selectDocument(payload);
  }

  render() {
    return (
      <div className="animated-collection-item">
        <a onClick={this.selectClick} className="sidebar-row click-on-this">
          <div className={`sidebar-item${this.props.selected ? ' selected' : ''}`}>
            <div className="sidebar-item-icon">
              <svg viewBox="0 0 18 18" preserveAspectRatio="xMidYMid" ><path d="M14,17H4a1,1,0,0,1-1-1V7H7.5A1.5,1.5,0,0,0,9,5.5V1h5a1,1,0,0,1,1,1V16A1,1,0,0,1,14,17ZM7,6H3L8,1V5A1,1,0,0,1,7,6Z" ></path></svg>
            </div>
            <div className="sidebar-item-text">
              <div className="sidebar-item-title redact">
                {this.props.title}
              </div>
            </div>
          </div>
        </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Doc);

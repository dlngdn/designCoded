import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleNavigation } from '../actions/index';

class NavigationControllerButtons extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    this.props.toggleNavigation();
  }

  render() {
    return (
      <div className="part-toolbar-parent">
        <div className="parts-toolbar no-caret-move parts-toolbar-main">
          <div className="parts-toolbar-buttons left" >
            <button onClick={this.onClick} aria-label="Toggle Sidebar" className="button button-flex border toggle-button" aria-live="off" aria-atomic="false" aria-haspopup="false" >
              <div className="button-icon" >
                <svg viewBox="0 0 18 18" preserveAspectRatio="xMidYMid" >
                  <path d="M16.5,16H1.5A1.5,1.5,0,0,1,0,14.5V3.5A1.5,1.5,0,0,1,1.5,2h15A1.5,1.5,0,0,1,18,3.5v11A1.5,1.5,0,0,1,16.5,16ZM5,4H2V5H5V4ZM5,6H2V7H5V6ZM5,8H2V9H5V8ZM17,3.5A0.5,0.5,0,0,0,16.5,3H7V15h9.5a0.5,0.5,0,0,0,.5-0.5V3.5Z">
                  </path>
                </svg>
              </div>
            </button>
            <div className="button-group">
              <div className="button-group-border">
              </div>
              <div className="button-group-buttons">
                <button aria-label="Previous Page" className="button button-flex marginless prev-button" aria-live="off" aria-atomic="false" aria-haspopup="false">
                  <div className="button-icon">
                    <svg viewBox="0 0 18 18" preserveAspectRatio="xMidYMid">
                      <path id="Flat" d="M13,15.5L11.5,17l-8-8,8-8L13,2.5,6.533,9Z" >
                      </path>
                    </svg>
                  </div>
                </button>
                <button disabled="" aria-label="Next Page" className="button button-flex marginless next-button" aria-live="off" aria-atomic="false">
                  <div className="button-icon">
                    <svg viewBox="0 0 18 18" preserveAspectRatio="xMidYMid" >
                      <path d="M5,15.5L6.5,17l8-8-8-8L5,2.5,11.467,9Z" >
                      </path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <button className="button button-flex border clickable document-button  " aria-live="off" aria-atomic="false" aria-haspopup="true" >
              <div className="button-icon">
                <svg viewBox="0 0 18 18" preserveAspectRatio="xMidYMid" >
                  <path d="M14,17H4a1,1,0,0,1-1-1V7H7.5A1.5,1.5,0,0,0,9,5.5V1h5a1,1,0,0,1,1,1V16A1,1,0,0,1,14,17ZM7,6H3L8,1V5A1,1,0,0,1,7,6Z" >
                  </path>
                </svg>
              </div>
              <div className="button-text">
                <span>Document</span>
              </div>
              <div className="button-chevron">
                <svg viewBox="0 0 10 10" preserveAspectRatio="xMidYMid">
                  <path d="M4.993,7.993A1,1,0,0,1,4.285,7.7L0.28,3.7A1,1,0,1,1,1.7,2.291l3.3,3.29,3.3-3.29A1,1,0,0,1,9.706,3.7L5.7,7.7A1,1,0,0,1,4.993,7.993Z">
                  </path>
                </svg>
              </div>
            </button>
          </div>
          <div className="parts-toolbar-buttons center">
          </div>
          <div className="parts-toolbar-buttons right">
            <div className="nav-presence-container" ></div>
              <button aria-label="Share" className="button button-flex border clickable button-share" aria-live="off" aria-atomic="false" aria-haspopup="true">
                <div className="button-icon">
                  <svg viewBox="0 0 18 18" preserveAspectRatio="xMidYMid" >
                    <path d="M13,15c-0.058,0-.115,0-0.173,0A3.086,3.086,0,0,0,13,14a4.014,4.014,0,0,0-2.4-3.4c1.021-.45,1.437-0.647.946-1.389A5.081,5.081,0,0,1,10.5,6.25,3,3,0,0,1,13,3a3,3,0,0,1,2.5,3.25,5.081,5.081,0,0,1-1.042,2.964c-0.594.9,0.137,1,1.667,1.714a3.4,3.4,0,0,1,1.832,2.144,0.631,0.631,0,0,1,.04.192l0,0.022C18,14.233,15.761,15,13,15Zm-1-1.025C12,13.99,12,14,12,14c0,1.1-2.686,2-6,2s-6-.9-6-2c0,0,0-.02.007-0.048a0.72,0.72,0,0,1,.045-0.2,3.994,3.994,0,0,1,2.2-2.5c1.835-.838,2.713-0.951,2-2A7.09,7.09,0,0,1,3,5.5,3.213,3.213,0,0,1,6,2,3.213,3.213,0,0,1,9,5.5,7.09,7.09,0,0,1,7.75,9.25c-0.713,1.049.165,1.162,2,2a3.992,3.992,0,0,1,2.2,2.5A0.713,0.713,0,0,1,12,13.975Z">
                    </path>
                  </svg>
                </div>
                <div className="button-text">
                  <span>Share</span>
                  <span className="share-number">2</span>
                </div>
              </button>
              <div className="nav-search nav-search-global">
                <div className="nav-search-icon clickable">
                  <svg viewBox="0 0 18 18" preserveAspectRatio="xMidYMid" >
                    <path d="M15.751,15.751a0.769,0.769,0,0,1-1.088,0l-4.016-4.016A5.98,5.98,0,1,1,13,7a5.944,5.944,0,0,1-1.265,3.646l4.016,4.016A0.769,0.769,0,0,1,15.751,15.751ZM12,7a5,5,0,1,0-5,5A5,5,0,0,0,12,7Z">
                    </path>
                  </svg>
                </div>
                <div className="nav-search-input" >
                  <div className="search-bar minimal nav-search-box" >
                    <div className="search-input" >
                      <input className="non-draggable-area redact" type="text" placeholder="Search" />
                    </div>
                  </div>
                </div>
              </div>
              <button aria-label="New…" className="button button-flex border clickable button-new" aria-live="off" aria-atomic="false" aria-haspopup="true" data-mousedown="no-caret-move" >
                <div className="button-icon" >
                  <svg viewBox="0 0 18 18" preserveAspectRatio="xMidYMid" >
                    <path d="M16.75,3.25l-2-2L16,0h0.956L18,1.043V2ZM6,11.995L7,9l7.25-7.25,2,2L9,11ZM4,4V14H14V8l2-2v9a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V3A1,1,0,0,1,3,2h9L10,4H4Z" >
                    </path>
                  </svg>
                </div>
              </button>
            </div>
        </div>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({toggleNavigation}, dispatch);
}

export default connect(null, mapDispatchToProps)(NavigationControllerButtons);

import React, { Component } from 'react';

class SidebarAccount extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="parts-screen-toolbar no-border">
        <div className="parts-toolbar no-caret-move">
          <div className="sidebar-parent">
            <div className="sidebar-settings">
              <div className="sidebar-account-container">
                <div className="sidebar-account clickable">
                  <div className="parts-profile-picture round">
                    <img src="//d2i1pl9gz4hwa7.cloudfront.net/LSGP8azXM64HhVNG5nqYJA" alt="David Langdon"/>
                  </div>
                  <svg viewBox="0 0 10 10" preserveAspectRatio="xMidYMid"><path d="M4.993,7.993A1,1,0,0,1,4.285,7.7L0.28,3.7A1,1,0,1,1,1.7,2.291l3.3,3.29,3.3-3.29A1,1,0,0,1,9.706,3.7L5.7,7.7A1,1,0,0,1,4.993,7.993Z"></path></svg>
                </div>
              </div>
              <span className="sidebar-invisible-button" ></span>
              <button aria-label="0 Notifications" className="button button-flex containerDark border sidebar-notifications clickable" >
                <div className="button-icon">
                  <svg viewBox="0 0 18 18" preserveAspectRatio="xMidYMid">
                    <path d="M2.013,13.988A7.766,7.766,0,0,0,3.76,10.813a34.7,34.7,0,0,0,.7-5.293c0-1.5,1.626-3,3.542-3.411V2a1,1,0,0,1,2,0V2.109c1.916,0.41,3.542,1.913,3.542,3.411a34.7,34.7,0,0,0,.7,5.293,7.765,7.765,0,0,0,1.747,3.176H2.013ZM9,16.5A2,2,0,0,1,7.071,15h3.859A2,2,0,0,1,9,16.5Z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default SidebarAccount;

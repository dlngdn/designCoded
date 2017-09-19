import React, { Component } from 'react';

import SidebarAccount from './sidebar_account';
import SidebarTop from '../containers/sidebar_top';
import SidebarBottom from './sidebar_bottom';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navigation-controller-sidebar ">
        <div className="parts-screen sidebar force-custom-scroll-thumb">
          <SidebarAccount />
          <div className="parts-screen-body scrollable">
            <div className="parts-screen-children-wrapper">
              <SidebarTop />
              <SidebarBottom />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Sidebar;

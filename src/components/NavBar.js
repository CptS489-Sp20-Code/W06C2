import React from 'react';
import AppMode from '../AppMode.js';

class NavBar extends React.Component {
    
    constructor(props) {
      super(props);
    }

    handleMenuBtnClick = () => {
      if (this.props.mode != AppMode.LOGIN) {
        this.props.toggleMenuOpen();
      }
    }

    render() {
       return (
        <div id="navBar" className="navbar">  
        <span className="navbarItems">
          <button id="menuBtn" className="menubtn" onClick={this.handleMenuBtnClick}>
            <span id="menuBtnIcon" 
              className={"menubtnicon " + (this.props.menuOpen ? "fa fa-times":"fa fa-bars")}>
            </span>
          </button>
          <img src="http://tiny.cc/sslogo" alt="Speed Score Logo" height="38px"
          width="38px" />
          <span id="topBarTitle" className="navbartitle">
            &nbsp;{this.props.title}
          </span>
        </span>
      </div>
    ); 
  }
}

export default NavBar;
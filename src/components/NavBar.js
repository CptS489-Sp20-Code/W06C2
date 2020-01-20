import React from 'react';
import AppMode from '../AppMode.js';

class NavBar extends React.Component {

    handleMenuBtnClick = () => {
      if (this.props.mode === AppMode.ROUNDS_LOGROUND ||
          this.props.mode === AppMode.ROUNDS_EDITROUND) {
        this.props.changeMode(AppMode.ROUNDS);
      } else if (this.props.mode != AppMode.LOGIN) {
        this.props.toggleMenuOpen();
      }
    }

    getMenuBtnIcon = () => {
      if (this.props.mode === AppMode.ROUNDS_LOGROUND || 
          this.props.mode === AppMode.ROUNDS_EDITROUND)
          return "fa fa-arrow-left";
      if (this.props.menuOpen)
        return "fa fa-times";
      return "fa fa-bars";
    }

    render() {
       return (
        <div id="navBar" className="navbar">  
        <span className="navbarItems">
          <button id="menuBtn" className="menubtn" onClick={this.handleMenuBtnClick}>
            <span id="menuBtnIcon" 
              className={"menubtnicon " + this.getMenuBtnIcon()}>
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
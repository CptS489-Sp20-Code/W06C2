import React from 'react';
import AppMode from '../AppMode.js';


class SideMenu extends React.Component {
    
    //onclick function for menu items. For now, we just close the menu.
    handleClick = () => {
      this.props.closeMenu(); //toggle closed
    }


    renderModeMenuItems = () => {
      switch (this.props.mode) {
        case AppMode.FEED:
          return(
            <div>
            <a className="menuItem" onClick={this.handleClick}>
                <span className="fa fa-list-alt"></span>&nbsp;Feed</a>
            <a className="menuItem" onClick={this.handleClick}>
                <span className="fa fa-user-friends"></span>&nbsp;Followed Users</a>
            </div>
          );
        break;
        case AppMode.ROUNDS:
          return(
            <div>
            <a className="menuItem" onClick={this.handleClick}>
                <span className="fa fa-history"></span>&nbsp;All Rounds</a>
            <a className="menuItem" onClick={this.handleClick}>
                <span className="fa fa-plus"></span>&nbsp;Log New Round</a>
            </div>
          );
        break;
        case AppMode.COURSES:
          return(
            <div>
            <a className="menuItem" onClick={this.handleClick}>
                <span className="fa fa-flag"></span>&nbsp;All Courses</a>
            <a className="menuItem" onClick={this.handleClick}>
                <span className="fa fa-plus"></span>&nbsp;Add a Course</a>
            </div>
          );
        default:
            return null;
        }
    }

    render() {
        return (
          <div className= {"sidenav " + (this.props.menuOpen ? "menuopen" : "menuclosed")} >
          {/* SIDE MENU TITLE */}
          <div className="sidenavtitle">
                <img src='http://tiny.cc/chrisprofilepic' height='50' width='50' />
                <span id="userID" className="sidenavuserID">&nbsp;{this.props.userId}</span>
          </div>
          {/* MENU CONTENT */}
          {/*Mode-based menu items */}
          {this.renderModeMenuItems()}
          {/* Always-there menu items */}
          <a className="menuItem"><span className="fa fa-info-circle"></span>&nbsp;About</a>
          <a className="menuItem"><span className="fa fa-sign-out-alt"></span>&nbsp;Log Out</a>
          </div>
        );
    }
}

export default SideMenu;
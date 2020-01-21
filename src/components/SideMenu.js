import React from 'react';
import AppMode from '../AppMode.js';


class SideMenu extends React.Component {
    
   //handleClick--Given the mode to switch to based on the menu item 
   //clicked (of type AppMode), switch to that mode. 
    handleClick = (itemClicked) => {
      this.props.changeMode(itemClicked);
    }

    //renderModeItems -- Renders correct subset of mode menu items based on
    //current mode, which is stored in this.prop.mode. Uses switch statement to
    //determine mode.
    renderModeMenuItems = () => {
      switch (this.props.mode) {
        case AppMode.FEED:
          return(
            <div>
            <a className="menuItem">
                <span className="fa fa-users"></span>&nbsp;Followed Users</a>
            <a className="menuItem">
                <span className="fa fa-search"></span>&nbsp;Search Feed</a>
            </div>
          );
        break;
        case AppMode.ROUNDS:
          return(
            <div>
              <a className="menuItem" onClick={() => this.handleClick(AppMode.ROUNDS_LOGROUND)}>
                <span className="fa fa-plus"></span>&nbsp;Log New Round</a>
              <a className="menuItem">
                <span className="fa fa-search"></span>&nbsp;Search Rounds</a>
            </div>
          );
        break;
        case AppMode.COURSES:
          return(
            <div>
            <a className="menuItem">
                <span className="fa fa-plus"></span>&nbsp;Add a Course</a>
            <a className="menuItem">
                <span className="fa fa-search"></span>&nbsp;Search Courses</a>
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
                  <span className="sidenavuserID">&nbsp;{this.props.userId}</span>
            </div>
            {/* MENU CONTENT */}
            {/*Mode-based menu items */}
            {this.renderModeMenuItems()}
            {/* Always-there menu items */}
            <a className="menuItem" onClick={this.props.showAbout}>
              <span className="fa fa-info-circle"></span>&nbsp;About</a>
            <a className="menuItem" onClick={() => this.props.changeMode(AppMode.LOGIN)}>
              <span className="fa fa-sign-out"></span>&nbsp;Log Out</a>
          </div>
        );
    }
}

export default SideMenu;
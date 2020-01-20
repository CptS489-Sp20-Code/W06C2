import React from 'react';
import AppMode from '../AppMode';

class FloatingButton extends React.Component {
  
    render() {
      return(
        <div className="floatbuttondiv">
          <a className="floatbutton" onClick={(this.props.menuOpen ? null : this.props.handleClick)}>
            <span className={"floaticon " + this.props.icon}></span>
          </a>
        </div>  
      );
    }
}

export default FloatingButton;
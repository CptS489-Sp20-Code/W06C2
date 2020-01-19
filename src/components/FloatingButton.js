import React from 'react';
import AppMode from '../AppMode';

class FloatingButton extends React.Component {
    handleClick = () => {
      this.props.changeMode(AppMode.ROUNDS_LOGROUND);
    }
    render() {
      return(
        <div className="floatButton" hidden={this.props.mode != AppMode.ROUNDS}>
          <a className="float" onClick={(this.props.menuOpen ? null : this.handleClick)}>
            <span className="floaticon fa fa-plus" id="floatBtnIcon"></span>
          </a>
        </div>  
      );
    }
}

export default FloatingButton;
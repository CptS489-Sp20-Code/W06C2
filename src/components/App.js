import React from 'react';
import NavBar from './NavBar.js';
import SideMenu from './SideMenu.js';
import ModeBar from './ModeBar.js';
import LoginPage from './LoginPage.js';
import FeedPage from './FeedPage.js';
import Rounds from './Rounds.js';
import CoursesPage from './CoursesPage.js';
import AppMode from "./../AppMode.js";

const modeToPage = {};
modeToPage[AppMode.LOGIN] = LoginPage;
modeToPage[AppMode.FEED] = FeedPage;
modeToPage[AppMode.ROUNDS] = Rounds;
modeToPage[AppMode.ROUNDS_LOGROUND] = Rounds;
modeToPage[AppMode.ROUNDS_EDITROUND] = Rounds;
modeToPage[AppMode.COURSES] = CoursesPage;


const modeTitle = {};
modeTitle[AppMode.LOGIN] = "Welcome to SpeedScore";
modeTitle[AppMode.FEED] = "Activity Feed";
modeTitle[AppMode.ROUNDS] = "My Rounds";
modeTitle[AppMode.COURSES] = "Courses";
modeTitle[AppMode.ROUNDS_LOGROUND] = "Log New Round";
modeTitle[AppMode.ROUNDS_EDITROUND] = "Edit Round";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mode: AppMode.LOGIN,
                  menuOpen: false,
                  userId: ""};
  }
 
  //When App component mounts, add a window-level click handler to close the
  //side menu if it is open. This event should fire only if no other lower-level
  //events intercept the click.
  componentDidMount() {
    window.addEventListener("click",this.handleClick);
  }

  //We remove the event listener when the component
  //unmounts. This is a best practice. 
  componentWillUnmount() {
    window.removeEventListener("click",this.handleClick);
  }

  handleModeAction = (modeAction) => {

  }

  handleChangeMode = (newMode) => {
    this.setState({mode: newMode});
  }

  setUserId = (Id) => {
    this.setState({userId: Id});
  }

  openMenu = () => {
    this.setState({menuOpen : true});
  }
  
  closeMenu = () => {
    this.setState({menuOpen : false});
  }

  toggleMenuOpen = () => {
    this.setState(prevState => ({menuOpen: !prevState.menuOpen}));
  }

  //When the user clicks anywhere on the app and the menu is open, close it.
  //This function takes advantage of event bubbling.
  handleClick = (event) => {
    if (this.state.menuOpen) {
      this.closeMenu();
    }
    event.stopPropagation();
  }


  render() {
    const ModePage = modeToPage[this.state.mode];
    return (
    <div className="spanheight" onClick={this.handleClick}>
      <NavBar 
        title={modeTitle[this.state.mode]}
        mode={this.state.mode}
        changeMode={this.handleChangeMode}
        menuOpen={this.state.menuOpen}
        toggleMenuOpen={this.toggleMenuOpen}/>
      <SideMenu mode={this.state.mode}
                userId={this.state.userId}
                menuOpen={this.state.menuOpen}
                changeMode={this.handleChangeMode}/>
      <ModeBar mode={this.state.mode} 
               changeMode={this.handleChangeMode}
               menuOpen={this.state.menuOpen}/>
      <ModePage mode={this.state.mode}
                changeMode={this.handleChangeMode}
                menuOpen={this.state.menuOpen}
                userId={this.state.userId}
                setUserId={this.setUserId}/>
    </div>
    );
  }
}

export default App;

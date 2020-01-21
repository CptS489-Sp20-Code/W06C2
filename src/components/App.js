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
                  userId: "",
                  showAbout: false};
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

  toggleAbout = () => {
    this.setState(prevState => ({showAbout: !prevState.showAbout}));
  }

  //When the user clicks anywhere on the app and the menu is open, close it.
  //This function takes advantage of event bubbling.
  handleClick = (event) => {
    if (this.state.menuOpen) {
      this.closeMenu();
    }
    event.stopPropagation();
  }

  renderAbout = () => {
    return (
      <div className="modal" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title"><b>About SpeedScore</b>
                <button className="close-modal-button" onClick={this.toggleAbout}>
                  &times;</button>
              </h3>
            </div>
            <div className="modal-body">
              <img
              src="https://dl.dropboxusercontent.com/s/awuwr1vpuw1lkyl/SpeedScore4SplashLogo.png"
              height="200" width="200"/>
              <h3>The World's First and Only Suite of Apps for
              Speedgolf</h3>
              <p>Version CptS 489 Sp20, Build W06C2 (React)<br/>
              &copy; 2017-20 The Professor of Speedgolf. All rights
              reserved.
              </p>
              <div style={{textAlign: "left"}}>
                <p>SpeedScore apps support</p>
                <ul>
                <li>live touranment scoring (<i>SpeedScore Live&reg;</i>)</li>
                <li>tracking personal speedgolf rounds and sharing results
                (<i>SpeedScore Track&reg;</i>)</li>
                <li>finding speedgolf-friendly courses, booking tee times, and
                paying to play speedgolf by the minute (<i>SpeedScore
                Play&reg;</i>)</li>
                </ul>
                <p>SpeedScore was first developed by Dr. Chris Hundhausen,
                associate professor of computer science at Washington State
                University and the <i>Professor of Speedgolf</i>, with support
                from Scott Dawley, CEO of Speedgolf USA, LLC. It leverages
                Google server-side technologies.</p>
                <p>For more information on SpeedScore, visit <a
                href="http://speedscore.live" target="_blank">SpeedScore's web
                site</a>. For more information on speedgolf, visit <a
                href="http://playspeedgolf.com"
                target="_blank">playspeedgolf.com</a> and <a
                href="http://usaspeedgolf.com" target="_blank">Speedgolf
                USA</a>.</p>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary btncolortheme"
                onClick={this.toggleAbout}>OK</button>
              </div>
          </div>
        </div>
      </div>
    );
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
                changeMode={this.handleChangeMode}
                showAbout={this.toggleAbout} />
      <ModeBar mode={this.state.mode} 
               changeMode={this.handleChangeMode}
               menuOpen={this.state.menuOpen}/>
      <ModePage mode={this.state.mode}
                changeMode={this.handleChangeMode}
                menuOpen={this.state.menuOpen}
                userId={this.state.userId}
                setUserId={this.setUserId}/>
      {this.state.showAbout ? this.renderAbout() : null}
    </div>
    );
  }
}

export default App;

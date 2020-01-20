import React from 'react';
import AppMode from '../AppMode.js';

class RoundForm extends React.Component {
    constructor(props) {
      super(props);
      //Create date object for today, taking time zone into consideration
      let today = new Date(Date.now()-(new Date()).getTimezoneOffset()*60000);
      //store date as ISO string
      if (this.props.mode === AppMode.ROUNDS_LOGROUND) {
        this.state = {date:  today.toISOString().substr(0,10), 
                    course: "",
                    type: "practice",
                    holes: "18",
                    strokes: 80,
                    minutes: 50,
                    seconds: "00",
                    notes: "",
                    faIcon: "fa fa-save",
                    btnLabel: "Save Round Data"}
      } else {
        this.state = this.props.startData;
        this.state.faIcon = "fa fa-edit";
        this.state.btnLabel = "Update Round Data";
      }
  }
  
  handleChange = (event) => {
      const name = event.target.name;
      if (name === "seconds") {
        this.setState({seconds: (event.target.value.length < 2 ? "0" + event.target.value : 
          event.target.value)});
      } else {
        this.setState({[name]: event.target.value});
      }
    }
  
    //handleSubmit -- start the spinner and invoke handleSave to do the actual work.
    handleSubmit = (event) => {
      event.preventDefault();
      //start spinner
      this.setState({faIcon: "fa fa-spin fa-spinner"});
      let roundData = this.state;
      delete roundData.faIcon;
      delete roundData.btnLabel;
      setTimeout(this.props.saveRound(roundData),300);  
    }
    
    computeSGS = () => {
      return (Number(this.state.strokes) + Number(this.state.minutes)) 
                  + ":" + this.state.seconds;
    }
  
    render() {
      return (
        <div className = "paddedPage">
        <form onSubmit={this.handleSubmit}>
          <center>
            <label>
              Date:
              <input name="date" className="form-control form-center" 
                type="date" value={this.state.date} onChange={this.handleChange} />
            </label>
            <p></p>
            <label>
              Course:
              <input name="course" className="form-control form-center" type="text"
                value={this.state.course} onChange={this.handleChange}
                placeholder="Course played" size="50" maxLength="50" />
            </label>
          <p></p>
          <label>Type:
          <select name="type" value={this.state.type} 
            className="form-control form-center" onChange={this.handleChange}>
            <option value="practice">Practice</option>
            <option value="tournament">Tournament</option>
          </select> 
          </label>
          <p></p>
          <label># Holes:
          <select name="holes" value={this.state.holes} 
            className="form-control form-center" onChange={this.handleChange}>
            <option value="9">9</option>
            <option value="18">18</option>
          </select> 
          </label>
          <p></p>
          <label># Strokes:
          <input name="strokes" className="form-control form-center" type="number" 
            min="9" max="200" value={this.state.strokes} 
            onChange={this.handleChange} />
          </label>
          <p></p>
          <label>Time: <br></br>
          <input name="minutes" type="number" size="3"
            min="10" max="400" value={this.state.minutes}
            onChange={this.handleChange} />:  
          <input name="seconds" type="number" size="2"
            min="0" max="60" value={this.state.seconds} onChange={this.handleChange} />
          </label>
          <p></p>
          <label>Speedgolf Score: <br></br>
              <input name="SGS" className="form-center" type="text" size="6" 
                disabled={true} value={this.computeSGS()} />
          </label>
          <p></p>
          <label>Notes:
              <textarea name="notes" className="form-control" rows="6" cols="75" 
                placeholder="Enter round notes" value={this.state.notes} onChange={this.handleChange} />
          </label>
          <p></p>
          <p></p>
          <button type="submit" style={{width: "70%",fontSize: "36px"}} 
            className="btn btn-primary btncolortheme">
              <span className={this.state.faIcon}>&nbsp;</span>{this.state.btnLabel}</button>
          </center>
        </form>
        </div>
      );
    }
}

  export default RoundForm;
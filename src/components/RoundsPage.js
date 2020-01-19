import React from 'react';

class RoundsPage extends React.Component {

   constructor(props) {
     super(props);
     let data = JSON.parse(localStorage.getItem("speedgolfUserData")); 
     this.state = {rounds: data[this.props.userId].rounds};
   }

    renderTable = () => {
      //TO DO: Implement this!
    }

    render() {
      return(
      <div className="paddedPage">
        <h1></h1>
        <table className="table table-hover">
          <thead className="thead-light">
          <tr>
            <th>Date</th>
            <th>Course</th>
            <th>Score</th>
            <th>View/Edit...</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
            {Object.keys(this.state.rounds) === 0 ? 
            <tr>
            <td colSpan="5" style={{fontStyle: "italic"}}>No rounds added yet</td>
            </tr> : 
            <tr>
            <td colSpan="5" style={{fontStyle: "italic"}}>Non-empty table to be rendered</td>
            </tr> }
          </tbody>
        </table>
      </div>
      );
    }
}

export default RoundsPage;
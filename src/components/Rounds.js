import React from 'react';
import AppMode from '../AppMode.js';
import RoundsTable from './RoundsTable.js';
import RoundForm from './RoundForm.js';
import FloatingButton from './FloatingButton.js';

class Rounds extends React.Component {

    constructor(props) {
      super(props);
      let data = JSON.parse(localStorage.getItem("speedgolfUserData")); 
      this.state = {rounds: data[this.props.userId].rounds,
                    roundCount: data[this.props.userId].roundCount,
                    deleteId: "",
                    editId: ""};           
    }

    addRound = (newData) => {
        let data = JSON.parse(localStorage.getItem("speedgolfUserData"));
        let newRounds = this.state.rounds;
        newData.roundNum = this.state.roundCount + 1;
        newRounds[this.state.roundCount + 1] = newData;
        data[this.props.userId].rounds = newRounds;
        data[this.props.userId].roundCount = this.state.roundCount + 1;
        localStorage.setItem("speedgolfUserData",JSON.stringify(data));
        this.setState({rounds: newRounds, roundCount: newData.roundNum});
        this.props.changeMode(AppMode.ROUNDS);
    }

    editRound = (newData) => {
        let data = JSON.parse(localStorage.getItem("speedgolfUserData")); 
        let newRounds = this.state.rounds;
        newRounds[this.state.editId] = newData;
        data[this.props.userId].rounds = newRounds;
        localStorage.setItem("speedgolfUserData",JSON.stringify(data));
        this.setState({rounds: newRounds, editId: ""});
        this.props.changeMode(AppMode.ROUNDS);
    }

    deleteRound = () => {
        let data = JSON.parse(localStorage.getItem("speedgolfUserData"));
        let newRounds = this.state.rounds;
        delete newRounds[this.state.deleteId];
        data[this.props.userId].rounds = newRounds;
        localStorage.setItem("speedgolfUserData",JSON.stringify(data));
        this.setState({rounds: newRounds, deleteId: ""});
    }

    setDeleteId = (val) => {
        this.setState({deleteId: val});
    }

    setEditId = (val) => {
        this.setState({editId: val});
    }

    render() {
        switch(this.props.mode) {
            case AppMode.ROUNDS:
                return (
                  <React.Fragment>
                  <RoundsTable 
                    rounds={this.state.rounds}
                    setEditId={this.setEditId}
                    setDeleteId={this.setDeleteId}
                    deleteRound={this.deleteRound}
                    changeMode={this.props.changeMode} /> 
                  <FloatingButton
                      handleClick={() => this.props.changeMode(AppMode.ROUNDS_LOGROUND)}
                      menuOpen={this.props.menuOpen}
                      icon={"fa fa-plus"} />
                  </React.Fragment>
                );
            case AppMode.ROUNDS_LOGROUND:
                return (
                    <RoundForm
                       mode={this.props.mode}
                       startData={""} 
                       saveRound={this.addRound} />
                );
            case AppMode.ROUNDS_EDITROUND:
                return (
                    <RoundForm
                      mode={this.props.mode}
                      startData={this.state.rounds[this.state.editId]} 
                      saveRound={this.editRound} />
                );
        }
    }
}

export default Rounds;
import React from 'react';
import './wizard.css'

class WizardView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nameInput: '',
      wizPlayers: [],
      numPlayers: 2,
      rounds: 20,
      duplicateName: 0
    }
  }

  onInput = (e) => {
    this.changeDuplicate();
    this.setState({
      nameInput: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.addPlayer(this.state.nameInput);
    this.setState({ nameInput: ''});
  }

  addPlayer = (name) => {
    let wizPlayers = this.state.wizPlayers
    if (name === '') {
      this.setState({ duplicateName: 1})
      return
    } else if (wizPlayers.some(players => players.name === name)) {
      this.setState({ duplicateName: 2});
      return
    } else if (name.length > 12) {
      this.setState({ duplicateName: 3});
      return
    } else {
      if (this.state.players.length === 0) {
        this.setState({wizPlayers: [{id: name, name: name, score: 0}]});
      } else {
        let namesArray = this.state.players
        namesArray.push({id: name, name: name, score: 0})
        this.setState({wizPlayers: namesArray})
      }
      this.setState({ duplicateName: 0});
    } 
  }

  handleNum = (e) => {
    switch (e.target.value) {
      case '4':
        this.setState({
          rounds: 15
        });
      break;
      case '5':
        this.setState({
          rounds: 12
        });
      break;
      case '6':
        this.setState({
          rounds: 10
        });
      break;
      default:
        this.setState({
          rounds: 20
        });
      break;
    }
  
    this.setState({
      numPlayers: e.target.value
    });
  }

  render() {
    let nameInput = <>
        <div className="nameInput-container">
        <div className="input-inner-box">
          <h2 className="add-players-title">Enter Name:</h2>
          <form name="Score" onSubmit={this.handleSubmit} className="input-form">
            <input autoComplete="off" type="text" onChange={this.onInput} value={this.state.nameInput} id="nameinput" placeholder="Type a Name..." />
            <button className="name-sub" type='submit'>Submit</button>
          </form>
        </div>
        { }
      </div> 
    </>

    return (
      <>
      <div className="playerSelect-box">            
        <h2 className="title-1">Players:</h2>
        <select name="numPlayers" id="numPlayers" value={this.state.numPlayers} onChange={this.handleNum}>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
      { nameInput }
      { this.state.rounds}
      </>
    );
  }
}

export default WizardView;
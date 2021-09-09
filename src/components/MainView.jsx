import React from 'react';
import './mainview.css';
import NavView from './navigation/NavView';
import BasicScoreView from './basicscore/BasicscoreView'
import DoppelkopfView from './doppelkopf/DoppelkopfView'
import NameInputView from './nameinput/NameInputView'

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameType: 'basic',
      players: [],
      gameData: [],
      duplicateName: 0
    };
  }

  addPlayer = (name) => {
    let players = this.state.players
    if (name === '') {
      this.setState({ duplicateName: 2})
      return
    } else if (players.some(players => players.name === name)) {
      this.setState({ duplicateName: 1});
      return
    } else {
      if (this.state.players.length === 0) {
        this.setState({players: [{id: name, name: name}]});
      } else {
        let namesArray = this.state.players
        namesArray.push({id: name, name: name})
        this.setState({players: namesArray})
      }
      this.setState({ duplicateName: 0});
    } 
  }

  changeDuplicate = () =>  {
    this.setState({duplicateName: 0})
  }

  handleSelect = (e) => {
    this.setState({
      gameType: e.target.value
    })
  }

  render(){
    let { gameType } = this.state;
    let gameScreen;

    if (gameType === 'basic') {
      gameScreen = <BasicScoreView players={this.state.players}  />
    } else if (gameType === 'dopplekoff') {
      gameScreen = <DoppelkopfView />
    } else {
      gameScreen = <div><p>Goodbye</p></div>
    }

    return (
      <>
        <NavView />
        <div className="app-container">
          <div className="gameselect-box">
            <h2 className="title-1">Select a Game:</h2>
            <select name="games" id="games" value={this.state.gameType} onChange={this.handleSelect}>
              <option value="basic">Basic Score</option>
              <option value="dopplekoff">Dopplekoff</option>
              <option value="president">President</option>
              <option value="rummyo">Rummy-O</option>
              <option value="wizard">Wizard</option>
            </select>
          </div>
          <NameInputView addPlayer={this.addPlayer} changeDuplicate={this.changeDuplicate} duplicateName={this.state.duplicateName}/>
          {gameScreen}
        </div>
      </>
    );
  }
}

export default MainView

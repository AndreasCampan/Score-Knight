import React from 'react';
import './mainview.css';
import NavView from './navigation/NavView';
import FooterView from './footer/FooterView';
import BasicScoreView from './basicscore/BasicscoreView'
import KabooView from './kaboo/KabooView'
import DoppelkopfView from './doppelkopf/DoppelkopfView'
import NameInputView from './nameinput/NameInputView'
import WizardView from './wizard/WizardView'
import PresidentView from './president/PresidentView';
import update from 'immutability-helper';

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameType: 'basic',
      players: [],
      duplicateName: 0,
      showDelete: false,
      kabooShowDetails: false,
      presidentShowDetails: false
      
    };
  }

  //Validates the name input. If the name is invalid, an error message will appear. If the name is valid, the function will create and push that player into the state.
  addPlayer = (name) => {
    let players = this.state.players
    if (name === '') {
      this.setState({ duplicateName: 1})
      return
    } else if (players.some(players => players.name === name)) {
      this.setState({ duplicateName: 2});
      return
    } else if (name.length > 12) {
      this.setState({ duplicateName: 3});
      return
    } else {
      if (this.state.players.length === 0) {
        this.setState({players: [{id: name, name: name, tempScore: 0, score: 0}]});
      } else {
        let namesArray = this.state.players
        namesArray.push({id: name, name: name, tempScore: 0, score: 0})
        this.setState({players: namesArray})
      }
      this.setState({ duplicateName: 0});
    } 
  }

  //Runs when a player adjusts their round score, a temporary value displayed so players can see their respective round scores, before adding it to their total score via the "add to total" button.
  updateTempScore = (name, value) => {
    const elementsIndex = this.state.players.findIndex(el => el.id === name);
    let playerOldScore = this.state.players[elementsIndex].tempScore
    let total = playerOldScore + value;

    let newTempScore = update(this.state.players, {[elementsIndex]: {tempScore: {$set: total }}});
    this.setState({players: newTempScore});
  }

  //Adds a players round score to their total score and changes their temporary score back to 0.
  updateScore = (name, value) => {
    const elementsIndex = this.state.players.findIndex(el => el.id === name);
    let playersCopy = [...this.state.players];
    let playerOldScore = this.state.players[elementsIndex].score

    playersCopy[elementsIndex] = {...playersCopy[elementsIndex], score: value + playerOldScore, tempScore: 0 }
    
    this.setState({ players: playersCopy})
  }

  //Deletes a player from the state remvoing all their data
  delPlayer = (name) => {
    let playersCopy = [...this.state.players];
    let playersCopy2 = playersCopy.filter(person => person.name !== name);

    this.setState({
      players: playersCopy2
    });
  }

  //Removes the error message from the name input validation check
  changeDuplicate = () =>  {
    this.setState({duplicateName: 0})
  }

  //Changes the state variable gameType based on the Select Game drop down menu
  handleSelect = (e) => {
    this.setState({
      gameType: e.target.value
    })
  }

  //Resets the game and removes all players and their data
  resetGame = () => {
    if(window.confirm('Are you sure you want to erase all game data?')){
      this.setState({
        players: []
      });
    } else {
      return
    }
  }
  
  //Resets the score leaving the players names but erasing their scores
  resetScore = () => {
    let playersCopy2 = [...this.state.players];

    let formattedArray = playersCopy2.map((element) => {
      let array = {"id": element.name, "name": element.name, "tempScore": 0, "score": 0}
      return array
    })

    if(window.confirm("Are you sure you want to reset every player's score?")){
      this.setState({
        players: formattedArray
      });
    } else {
      return
    }
  }

  //A function to toggle the delete player overlay
  showDeletePlayer = () => {
    this.setState(prevState => ({
      showDelete: !prevState.showDelete
    }))
  }

  render(){
    let { gameType } = this.state;
    let gameScreen;
    let delActive;

    //Changes the styling if the delete player is toggled.
    if(this.state.showDelete === true) {
      delActive = { 'backgroundColor': 'red'}
    } else {
      delActive = {}
    }

    
    let gameControls = <> 
      <NameInputView addPlayer={this.addPlayer} changeDuplicate={this.changeDuplicate} duplicateName={this.state.duplicateName}/>
      <div className="bttn-controls-box">
        <button onClick={() => {this.resetGame()}}>Reset Game</button>
        <button onClick={() => {this.resetScore()}}>Reset Score</button>
        <button style={ delActive } onClick={() => {this.showDeletePlayer()}}>Edit Players</button>
      </div>
    </>

    //Renders the scorekeeper based on which game is selected in the "Select Game" drop down menu
    switch (gameType) {
      case 'basic':
        gameScreen = <> { gameControls } <BasicScoreView players={this.state.players} updateScore={this.updateScore} updateTempScore={this.updateTempScore} showDelete={this.state.showDelete} delPlayer={this.delPlayer} /> </>
      break;
      case 'doppelkopf':
        gameScreen = <> { gameControls } <DoppelkopfView players={this.state.players} updateScore={this.updateScore} showDelete={this.state.showDelete} delPlayer={this.delPlayer}/> </>
      break;
      case 'kaboo':
        gameScreen = <> { gameControls } <KabooView /><BasicScoreView players={this.state.players} updateScore={this.updateScore} updateTempScore={this.updateTempScore} showDelete={this.state.showDelete} delPlayer={this.delPlayer}/></>
      break;
      case 'president':
        gameScreen = <PresidentView />
      break;
      case 'wizard':
        gameScreen = <WizardView />
      break;
      default:
        gameScreen =  <> { gameControls } <div><p>Coming Soon!!</p></div> </>
      break;
    }

    return (
      <>
        <NavView />
        <div className="app-container">
          <div className="gameselect-box">            
            <h2 className="title-1">Select a Game:</h2>
            <select name="games" id="games" value={this.state.gameType} onChange={this.handleSelect}>
              <option value="basic">Basic Score Keeper</option>
              <option value="doppelkopf">Doppelkopf</option>
              <option value="kaboo">Kaboo (Cabo)</option>
              <option value="president">President</option>
              <option value="rummyo">Rummy-O</option>
              <option value="wizard">Wizard</option>
            </select>
          </div>
          { gameScreen }
        </div>
        <FooterView />
      </>
    );
  }
}

export default MainView

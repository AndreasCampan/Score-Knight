import React from 'react';
import './mainview.css';
import NavView from './navigation/NavView';
import FooterView from './footer/FooterView';
import BasicScoreView from './basicscore/BasicscoreView'
import KabooView from './kaboo/KabooView'
import DoppelkopfView from './doppelkopf/DoppelkopfView'
import NameInputView from './nameinput/NameInputView'
import WizardView from './wizard/WizardView'

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameType: 'basic',
      players: [],
      duplicateName: 0,
      showDelete: false
    };
  }

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

  updateTempScore = (name, value) => {
    const elementsIndex = this.state.players.findIndex(el => el.id === name);
    let playersCopy = [...this.state.players];
    let playerOldScore = this.state.players[elementsIndex].tempScore

    playersCopy[elementsIndex] = {...playersCopy[elementsIndex], tempScore: value + playerOldScore }
    
    this.setState({ players: playersCopy})
  }

  updateScore = (name, value) => {
    const elementsIndex = this.state.players.findIndex(el => el.id === name);
    let playersCopy = [...this.state.players];
    let playerOldScore = this.state.players[elementsIndex].score

    playersCopy[elementsIndex] = {...playersCopy[elementsIndex], score: value + playerOldScore, tempScore: 0 }
    
    this.setState({ players: playersCopy})
  }

  delPlayer = (name) => {
    let playersCopy = [...this.state.players];
    let playersCopy2 = playersCopy.filter(person => person.name !== name);

    this.setState({
      players: playersCopy2
    });
  }

  changeDuplicate = () =>  {
    this.setState({duplicateName: 0})
  }

  handleSelect = (e) => {
    this.setState({
      gameType: e.target.value
    })
  }

  resetGame = () => {
    if(window.confirm('Are you sure you want to erase all game data?')){
      this.setState({
        players: []
      });
    } else {
      return
    }
    
  }

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

  showDeletePlayer = () => {
    this.setState(prevState => ({
      showDelete: !prevState.showDelete
    }))
  }

  render(){
    let { gameType } = this.state;
    let gameScreen;
    let delActive;

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

    if (gameType === 'basic') {
      gameScreen = <> { gameControls } <BasicScoreView players={this.state.players} updateScore={this.updateScore} updateTempScore={this.updateTempScore} showDelete={this.state.showDelete} delPlayer={this.delPlayer} /> </>
    } else if (gameType === 'doppelkopf') {
      gameScreen = <> { gameControls } <DoppelkopfView players={this.state.players} updateScore={this.updateScore} showDelete={this.state.showDelete} delPlayer={this.delPlayer}/> </>
    } else if (gameType === 'kaboo') {
      gameScreen = <> { gameControls } <KabooView /></>
    } else if (gameType === 'wizard') {
      gameScreen = <WizardView />
    } else {
      gameScreen =  <> { gameControls } <div><p>Coming Soon!!</p></div> </>
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

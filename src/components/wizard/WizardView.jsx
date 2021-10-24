import React from 'react';
import './wizard.css'

class WizardView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nameInput: '',
      duplicateName: 0,
      wizPlayers: [],
      numPlayers: 0,
      roundNum: 20,
      curtRound: 0,
      finishBid: 0,
      finishRound: 0,
      start: 0
    }
  }

  //Erase the error message from name input
  Duplicate = () =>  {
    this.setState({ duplicateName: 0 });
  }
  
  onInput = (e) => {
    this.Duplicate();
    this.setState({
      nameInput: e.target.value
    });
  }

  //Add a player to the wizard's players object
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
      if (this.state.wizPlayers.length === 0) {
        this.setState({wizPlayers: [{id: name, name: name, score: 0}]});
      } else {
        let namesArray = this.state.wizPlayers
        namesArray.push({id: name, name: name, score: 0})
        this.setState({wizPlayers: namesArray})
      }
      this.setState({ duplicateName: 0});
    } 
  }
  //Handles what happens when a name is inputted
  handleSubmit = async (e) => {
    e.preventDefault();
    await this.addPlayer(this.state.nameInput);
    this.setState({ nameInput: ''});
    this.roundAmt()
  }

  //Automatically adjusts the number of roundNum based on how many players
  roundAmt = () => {
    let size = Object.keys(this.state.wizPlayers).length;
    console.log(size)
    switch (size) {
      case 1 || 2 || 3:
        this.setState({
          roundNum: 20
        });
      break;
      case 4:
        this.setState({
          roundNum: 15
        });
      break;
      case 5:
        this.setState({
          roundNum: 12
        });
      break;
      case 6:
        this.setState({
          roundNum: 10
        });
      break;
      default:
        this.setState({
          roundNum: 20
        });
      break;
    }
    this.setState({
      numPlayers: size
    });
  }

  drawPlayerCards = () => {
    let game;
    if(this.state.start === 0){
      game = this.state.wizPlayers.map((data) => {
        return (
          <div className="player-name">{data.name}</div>
        )
      });
    } else {
      if(this.state.curtRound < this.state.roundNum){
        game = this.state.wizPlayers.map((data) => {
          return (
            <li className="player-card" key={data.id}>
        <span className="player-name">{data.name}</span>
        <div className="player-scoreBox">
          <input autoComplete="off" type="text" onChange={this.onInput} placeholder="Bid" />
        </div>
      </li>
          )
        });
      }
    }
    return game
  }

  runGame = () => {
    this.setState({
      start: 1,
      curtRound: 1
    })
  }
  
  render() {
    let startGame;
    if(this.state.start === 0){
      startGame = <button onClick={()=>{this.runGame()}}>Start Game</button>
    } else {
      startGame = <></>
    }
    //Creates an error message depending on the reason
    let dupMessage;
    if (this.state.duplicateName === 0) {
      dupMessage = <div className="duplicate-name"></div>
    } else if (this.state.duplicateName === 1) {
      dupMessage = <div className="duplicate-name">Please enter a name!</div>
    } else if (this.state.duplicateName === 2) {
      dupMessage = <div className="duplicate-name">The player already exists!</div>
    } else {
      dupMessage = <div className="duplicate-name">Max 12 characters</div>
    }
    
    //Name input form (Different input from other games). Removes itself when max players achieved
    let nameForm;
    if(this.state.numPlayers < 6 && this.state.start === 0){
      nameForm = <>
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
    } else {
      nameForm = <></>
    }    

    return (
      <>
      <div className="stats-box">            
        <h2 className="title-wiz">Players:</h2>
        <div className="count-style"> { this.state.numPlayers } </div>
        <h2 className="title-wiz">Rounds:</h2>
        <div className="count-style"> { this.state.curtRound}/{ this.state.roundNum } </div>
      </div>
      { nameForm }
      { dupMessage }
      { this.drawPlayerCards() }
      { startGame }
      </>
    );
  }
}

export default WizardView;
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
      finishedGame: 0,
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
        this.setState({wizPlayers: [{id: name, name: name, score: 0, bid: 0, actual: 0}]});
      } else {
        let namesArray = this.state.wizPlayers
        namesArray.push({id: name, name: name, score: 0, bid: 0, actual: 0})
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

  //Updates the bid amount for the player that invokes the function
  updateBid = (name, value) => {
    const elementsIndex = this.state.wizPlayers.findIndex(el => el.id === name);
    let wizPlayersCopy = [...this.state.wizPlayers];
    let playerOldBid = this.state.wizPlayers[elementsIndex].bid

    wizPlayersCopy[elementsIndex] = {...wizPlayersCopy[elementsIndex], bid: value + playerOldBid}
    
    this.setState({ wizPlayers: wizPlayersCopy})
  }

  //Updates the actual tricks won for the player that invokes the function
  updateActual = (name, value) => {
    const elementsIndex = this.state.wizPlayers.findIndex(el => el.id === name);
    let wizPlayersCopy = [...this.state.wizPlayers];
    let playerOldActual = this.state.wizPlayers[elementsIndex].actual

    wizPlayersCopy[elementsIndex] = {...wizPlayersCopy[elementsIndex], actual: value + playerOldActual}
    
    this.setState({ wizPlayers: wizPlayersCopy})
  }
  
  updateScore = () => {
    //Object.assign([], this.state.wizPlayers)
    //[...this.state.wizPlayers]
    let players = Array.from(this.state.wizPlayers)
    
    for(let i=0; i < players.length; i++){
      let score = 0;
      if( players[i].actual === players[i].bid){
        score = players[i].score + 20 + Math.abs((players[i].actual - players[i].bid) * 10);
        players[i].score = score;
        players[i].bid = 0;
        players[i].actual = 0;
      } else if(players[i].actual > players[i].bid || players[i].actual < players[i].bid) {
        score = players[i].score - (Math.abs(players[i].actual - players[i].bid)) * 10;
        players[i].score = score;
        players[i].bid = 0;
        players[i].actual = 0;
      }
    }
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
      if(this.state.curtRound <= this.state.roundNum + 1 && this.state.finishedGame === 0){
        if(this.state.finishBid === 1){
          game = this.state.wizPlayers.map((data) => {
            return (
                <li className="player-card" key={data.id}>
                  <span className="player-name">{data.name}</span>
                  <div className="player-scoreBox">Bid: {data.bid} </div>
                  <div className="wiz-bttn-container">
                    <button className="basic-bttn-minus down" onClick={()=>{this.updateBid(data.name, -1)}}>-1</button>
                    <button className="basic-bttn-plus down" onClick={()=>{this.updateBid(data.name, 1)}}>+1</button>
                  </div>
                </li>
            )
          });
        }

        if(this.state.finishBid === 2){
          game = this.state.wizPlayers.map((data) => {
            return (
                <li className="player-card" key={data.id}>
                  <span className="player-name">{data.name}</span>
                  <div className="player-scoreBox">Bid: {data.bid} </div>
                  <div className="player-scoreBox">Tricks won: {data.actual} </div>
                  <div className="wiz-bttn-container">
                    <button className="basic-bttn-minus down" onClick={()=>{this.updateActual(data.name, -1)}}>-1</button>
                    <button className="basic-bttn-plus down" onClick={()=>{this.updateActual(data.name, 1)}}>+1</button>
                  </div>
                </li>
            )
          });
        }
      } else {
       game = <div>Game Over!</div>
      }
    }
    return game
  }

  runGame = () => {
    this.setState({
      start: 1,
      curtRound: 1,
      finishBid: 1
    })
  }

  finishBidding = () => {
    this.setState({
      finishBid: 2
    })
  }
  
  finishRound = () => {
    this.updateScore();

    if(this.state.curtRound < this.state.roundNum){
      this.setState(prevState => ({
        finishBid: 1,
        curtRound: prevState.curtRound + 1
      }));
    } else {
      this.setState({
        finishBid: 0,
        finishedGame: 1
      });
    }

  }

  render() {
    let startGame;
    let nameForm;
    let finishBid;
    let finishActual;
    let scoreboard;
    
    let scoreTable = this.state.wizPlayers.map((data) => {
      return (
      <li className="st-player" key={data.id}>
        {data.name} <span className="st-score">{ data.score }</span>
      </li>
      )
    })

    if(this.state.start === 1){
      scoreboard = <div className="scoreboard">
        <h2 className="scoreboard-title">Scoreboard</h2>
        <ol className="totals-box">
          { scoreTable }
        </ol>
      </div>
    } else {
      scoreboard = <></>
    }

    if(this.state.start === 0 && this.state.wizPlayers.length >= 2){
      startGame = <button className="standard-bttn" onClick={()=>{this.runGame()}}>Start Game</button>
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
    if(this.state.numPlayers < 6 && this.state.start === 0){
      nameForm = <>
          <div className="nameInput-container">
          <div className="input-inner-box">
            <h2 className="add-players-title">Enter Name:</h2>
            <form name="Score" onSubmit={this.handleSubmit} className="input-form">
              <input autoComplete="off" type="text" onChange={this.onInput} value={this.state.nameInput} id="nameinput" placeholder="Type a Name..." />
              <button className="standard-bttn" type='submit'>Submit</button>
            </form>
          </div>
          { dupMessage }
        </div> 
      </>
    } else {
      nameForm = <></>
    }    

    if(this.state.finishBid === 1){
      finishBid = <button className="standard-bttn" onClick={()=>{this.finishBidding()}}>Finish Bid</button>
    } else {
      <></>
    }

    if(this.state.finishBid === 2){
      finishActual = <button className="standard-bttn" onClick={()=>{this.finishRound()}}>Finish Tricks</button>
    } else {
      <></>
    }

    return (
      <>
      <div className="stats-box">            
        <h2 className="title-wiz">Players:</h2>
        <div className="count-style"> { this.state.numPlayers } </div>
        <h2 className="title-wiz">Round:</h2>
        <div className="count-style"> { this.state.curtRound}/{ this.state.roundNum } </div>
      </div>
      { nameForm }
      <div className="basic-container">
        { scoreboard }
        <ul className="player-list">
          { this.drawPlayerCards() }
        </ul>
      </div>
        { startGame }
        { finishBid }
        { finishActual }

      </>
    );
  }
}

export default WizardView;
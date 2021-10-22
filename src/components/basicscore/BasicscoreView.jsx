import React from 'react';
import './basic.css'

class BasicScoreView extends React.Component {

  processPlayer(e){
    let player = e.target.parentElement.parentElement.childNodes[0].innerText
    this.props.delPlayer(player);
  }

  addTempScore(name, value){
    this.props.updateScore(name, value);
  }

  render() {
    let showDelete = this.props.showDelete;
    let delBox;
    let cardStyle
  
      if(showDelete === true) {
        delBox = 
          <button className="del-container" onClick={(e)=>{this.processPlayer(e)}}>
            <span className="spinner top"></span>
            <span className="spinner bot"></span>
          </button>
          cardStyle = { 'backgroundColor': 'rgb(200, 200, 200)'}
      } else {
        delBox = <div className="del-container"></div>
      }
    const playersArray = this.props.players
    let playersArrayCopy = [...playersArray]
    let drawPlayers = playersArray.map((data) => {
      return (
      <li className="player-card" key={data.id} style={ cardStyle }>
        <span className="player-name">{data.name}</span>
        <div className="player-scoreBox">
          <span className="player-score"> Total: {data.score} </span>
          <span className="player-round-score"> Round: {data.tempScore} </span>
        </div>
        <button onClick={()=>{this.addTempScore(data.name, data.tempScore)}} >Add to Total</button>
        { delBox }
        <div className="bttn-container">
          <button style={ cardStyle } className="basic-bttn-minus up" onClick={()=>{this.props.updateTempScore(data.name, -5)}}>-5</button>
          <button style={ cardStyle } className="basic-bttn-minus down" onClick={()=>{this.props.updateTempScore(data.name, -1)}}>-1</button>
          <button style={ cardStyle } className="basic-bttn-plus down" onClick={()=>{this.props.updateTempScore(data.name, 1)}}>+1</button>
          <button style={ cardStyle } className="basic-bttn-plus up" onClick={()=>{this.props.updateTempScore(data.name, 5)}}>+5</button>
        </div>
      </li>
      )
    });
    
    let sortedArray = playersArrayCopy.sort((a, b) => {
      return b.score - a.score;
    });

    let scoreTable = sortedArray.map((data) => {
      return (
      <li className="st-player" key={data.id}>
        {data.name} <span className="st-score">{ data.score }</span>
      </li>
      )
    })

    return(
      <div className="basic-container">
        <div className="scoreboard">
          <h2 className="scoreboard-title">Scoreboard</h2>
          <ol className="totals-box">
            { scoreTable }
          </ol>
        </div>
        <ul className="player-list">
          { drawPlayers }
        </ul>
      </div>
    )
  }
}

export default BasicScoreView;
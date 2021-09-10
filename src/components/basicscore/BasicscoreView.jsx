import React from 'react';
import './basic.css'

class BasicScoreView extends React.Component {

  render() {
    const playersArray = this.props.players
    let playersArrayCopy = [...playersArray]
    let drawPlayers = playersArray.map((data) => {
      return (
      <li className="player-card" key={data.id}>
        {data.name}
        <span className="player-score"> { data.score} </span>
        <div className="bttn-container">
          <button className="basic-bttn-minus up" onClick={()=>{this.props.updateScore(data.name, -5)}}>-5</button>
          <button className="basic-bttn-minus down" onClick={()=>{this.props.updateScore(data.name, -1)}}>-1</button>
          <button className="basic-bttn-plus down" onClick={()=>{this.props.updateScore(data.name, 1)}}>+1</button>
          <button className="basic-bttn-plus up" onClick={()=>{this.props.updateScore(data.name, 5)}}>+5</button>
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
import React from 'react';
import './basic.css'

class BasicScoreView extends React.Component {
 
  render() {
    let playersArray = this.props.players
    let drawPlayers = playersArray.map((data) => {
      return (
      <li className="player-card" key={data.id}>
        {data.name}
        <span className="player-score">0</span>
        <div className="bttn-container">
          <button className="basic-bttn-minus up">-5</button>
          <button className="basic-bttn-minus down">-1</button>
          <button className="basic-bttn-plus down">+1</button>
          <button className="basic-bttn-plus up">+5</button>
        </div>
      </li>
      )
    });

    let scoreTable = playersArray.map((data) => {
      return (
      <li className="st-player" key={data.id}>
        {data.name}
        
      </li>
      )
    });

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
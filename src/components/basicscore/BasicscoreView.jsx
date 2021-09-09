import React from 'react';
import './basic.css'

class BasicScoreView extends React.Component {
 
  render() {
    let playersArray = this.props.players
    let drawPlayers = playersArray.map((data) => {
      return (
      <li key={data.id}>{data.name}</li>
      )
    });

    return(
      <div className="basic-container">
        <ul>
          { drawPlayers }
        </ul>
      </div>
    )
  }
}

export default BasicScoreView;
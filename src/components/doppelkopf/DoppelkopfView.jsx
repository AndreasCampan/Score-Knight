import React from 'react';
import './doppelkopf.css'
import spades from '../../img/spades.png'
import hearts from '../../img/hearts.png'
import clubs from '../../img/clubs.png'
import diamonds from '../../img/diamonds.png'
import BasicScoreView from '../basicscore/BasicscoreView'

class DoppelkopfView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
  }

  toggleHide = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }))
  }

  render(){
    let gameDetails;

    if (this.state.showDetails === true) {
      gameDetails =  <div className="game-details-box">
          <table className="trump-box">
            <thead>
              <tr>
                <th colSpan="3" className="table-headings">Trumps</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ten of Hearts (Strongest Trump)</td>
                <td>10 <img src={ hearts } className="suite-symbols" alt="Spades suite symbol"/> </td>
              </tr>
              <tr>
                <td>Queen of Clubs (Elderly)</td>
                <td>Q <img src={ clubs } className="suite-symbols" alt="Spades suite symbol"/></td>
              </tr>
              <tr>
                <td>Queen of Spades </td>
                <td>Q <img src={ spades } className="suite-symbols" alt="Spades suite symbol"/></td>
              </tr>
              <tr>
                <td>Queen of Hearts</td>
                <td>Q <img src={ hearts } className="suite-symbols" alt="Spades suite symbol"/></td>
              </tr>
              <tr>
                <td>Queen of Diamonds</td>
                <td>Q <img src={ diamonds } className="suite-symbols" alt="Spades suite symbol"/></td>
              </tr>
              <tr>
                <td>Jack of Clubs (Karlchen)</td>
                <td>J <img src={ clubs } className="suite-symbols" alt="Spades suite symbol"/></td>
              </tr>
              <tr>
                <td>Jack of Spades</td>
                <td>J <img src={ spades } className="suite-symbols" alt="Spades suite symbol"/></td>
              </tr>
              <tr>
                <td>Jack of Hearts</td>
                <td>J <img src={ hearts } className="suite-symbols" alt="Spades suite symbol"/></td>
              </tr>
              <tr>
                <td>Jack of Diamonds</td>
                <td>J <img src={ diamonds } className="suite-symbols" alt="Spades suite symbol"/></td>
              </tr>
              <tr>
                <td>Ace of Diamonds (Fox)</td>
                <td>J <img src={ diamonds } className="suite-symbols" alt="Spades suite symbol"/></td>
              </tr>
              <tr>
                <td>Ten of Diamonds</td>
                <td>J <img src={ diamonds } className="suite-symbols" alt="Spades suite symbol"/></td>
              </tr>
              <tr>
                <td>King of Diamonds</td>
                <td>J <img src={ diamonds } className="suite-symbols" alt="Spades suite symbol"/></td>
              </tr>
              <tr>
                <td>Nine of Diamonds (Weakest Trump)</td>
                <td>J <img src={ diamonds } className="suite-symbols" alt="Spades suite symbol"/></td>
              </tr>
              <tr>
                <td>Ace</td>
                <td>
                  <img src={ hearts } className="suite-symbols" alt="Spades suite symbol"/>
                  <img src={ clubs } className="suite-symbols" alt="Spades suite symbol"/>
                  <img src={ spades } className="suite-symbols" alt="Spades suite symbol"/>
                </td>
              </tr>
              <tr>
                <td>Ten</td>
                <td>
                  <img src={ hearts } className="suite-symbols" alt="Spades suite symbol"/>
                  <img src={ clubs } className="suite-symbols" alt="Spades suite symbol"/>
                  <img src={ spades } className="suite-symbols" alt="Spades suite symbol"/>
                </td>
              </tr>
              <tr>
                <td>King</td>
                <td>
                  <img src={ hearts } className="suite-symbols" alt="Spades suite symbol"/>
                  <img src={ clubs } className="suite-symbols" alt="Spades suite symbol"/>
                  <img src={ spades } className="suite-symbols" alt="Spades suite symbol"/>
                </td>
              </tr>
              <tr>
                <td>Nine</td>
                <td>
                  <img src={ hearts } className="suite-symbols" alt="Spades suite symbol"/>
                  <img src={ clubs } className="suite-symbols" alt="Spades suite symbol"/>
                  <img src={ spades } className="suite-symbols" alt="Spades suite symbol"/>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="value-box">
            <h2 className="table-headings">Card Values</h2>
            <div className="card-values">
              <p>Ace: 11</p>
              <p>Ten: 10</p>
              <p>King: 4</p>
              <p>Queen: 3</p>
              <p>Jack: 2</p>
              <p>Nine: 0</p>
            </div>
          </div>
          <div className="point-box">
            <h2 className="table-headings">Game Scoring</h2>
            <ol className="DK-ol">
              <li>1 Point - for each score (120, 90, 60, 30, 0) not acquired by the opponents</li>
              <li>1 Point - for each no 120, 90, 60, 30, 0 called at the beginning of the game</li>
              <li>Re/Contra - double the points</li>
              <li>1 Point - for each of the following:</li>
              <ul>
                <li>Karlchen: Last pot with 'Jack of Clubs"</li>
                <li>Doppelkopf: Pot with more than 40 points</li>
                <li>Solo: Queen, Jack, Suit, Marriage</li>
                <li>Fox: Ace of diamonds caught by opponents</li>
                <li>Elderly: Won against the Queens</li>
              </ul>
            </ol>              
          </div>
        </div>

    } else {
      gameDetails = <div></div>
    }
  
    return(
      <div className="dop-container">
        <h1>Doppelkopf</h1>
        <p style={{ color: 'red', margin: 0}}>Under Construction</p>
        <button className="rules-bttn-tog" onClick={()=>{this.toggleHide()}}>Game Details</button>
        { gameDetails }
        <BasicScoreView players={this.props.players} updateScore={this.props.updateScore} showDelete={this.props.showDelete} delPlayer={this.props.delPlayer}/>

      </div>
    )
  }
}

export default DoppelkopfView;
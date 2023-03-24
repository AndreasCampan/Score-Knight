import React from 'react';
import './Doppelkopf.css';
import spades from '../../img/spades.png';
import hearts from '../../img/hearts.png';
import clubs from '../../img/clubs.png';
import diamonds from '../../img/diamonds.png';
import BasicScoreView from '../basicscore/BasicscoreView';

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
      gameDetails = <div className="game-details-box">
          <table className="trump-box">
            <thead>
              <tr>
                <th colSpan="3" className="table-headings">Trumps</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='symbol-box'>10 <img src={ hearts } className="suite-symbols" alt="Spades suite symbol"/> </td>
                <td>Ten of Hearts</td>
              </tr>
              <tr>
                <td className='symbol-box'>Q <img src={ clubs } className="suite-symbols" alt="Spades suite symbol"/></td>
                <td>Queen of Clubs (Elderly)</td>
              </tr>
              <tr>
                <td className='symbol-box'>Q <img src={ spades } className="suite-symbols" alt="Spades suite symbol"/></td>
                <td>Queen of Spades </td>
              </tr>
              <tr>
                <td className='symbol-box'>Q <img src={ hearts } className="suite-symbols" alt="Spades suite symbol"/></td>
                <td>Queen of Hearts</td>
              </tr>
              <tr>
                <td className='symbol-box'>Q <img src={ diamonds } className="suite-symbols" alt="Spades suite symbol"/></td>
                <td>Queen of Diamonds</td>
              </tr>
              <tr>
                <td className='symbol-box'>J <img src={ clubs } className="suite-symbols" alt="Spades suite symbol"/></td>
                <td>Jack of Clubs (Karlchen)</td>
              </tr>
              <tr>
                <td className='symbol-box'>J <img src={ spades } className="suite-symbols" alt="Spades suite symbol"/></td>
                <td>Jack of Spades</td>
              </tr>
              <tr>
                <td className='symbol-box'>J <img src={ hearts } className="suite-symbols" alt="Spades suite symbol"/></td>
                <td>Jack of Hearts</td>
              </tr>
              <tr>
                <td className='symbol-box'>J <img src={ diamonds } className="suite-symbols" alt="Spades suite symbol"/></td>
                <td>Jack of Diamonds</td>
              </tr>
              <tr>
                <td className='symbol-box'>A <img src={ diamonds } className="suite-symbols" alt="Spades suite symbol"/></td>
                <td>Ace of Diamonds (Fox)</td>
              </tr>
              <tr>
                <td className='symbol-box'>10 <img src={ diamonds } className="suite-symbols" alt="Spades suite symbol"/></td>
                <td>Ten of Diamonds</td>
              </tr>
              <tr>
                <td className='symbol-box'>K <img src={ diamonds } className="suite-symbols" alt="Spades suite symbol"/></td>
                <td>King of Diamonds</td>
              </tr>
              <tr>
                <td className='symbol-box'>9 <img src={ diamonds } className="suite-symbols" alt="Spades suite symbol"/></td>
                <td>Nine of Diamonds</td>
              </tr>
            </tbody>
              <tr>
                <th colSpan="3" className="table-headings">Non-Trumps</th>
              </tr>
              <tr>
                <td className='symbol-box2'><span class='symbol-margin'>A</span>
                  <img src={ clubs } className="suite-symbols" alt="Spades suite symbol"/>
                  <img src={ spades } className="suite-symbols" alt="Spades suite symbol"/>
                  <img src={ hearts } className="suite-symbols" alt="Spades suite symbol"/>
                </td>
                <td>Ace</td>
              </tr>
              <tr>
               <td className='symbol-box3'><span class='symbol-margin'>10</span>
                  <img src={ clubs } className="suite-symbols" alt="Spades suite symbol"/>
                  <img src={ spades } className="suite-symbols" alt="Spades suite symbol"/>
                </td>
                <td>Ten</td>
              </tr>
              <tr>
                <td className='symbol-box2'><span class='symbol-margin'>K</span>
                  <img src={ clubs } className="suite-symbols" alt="Spades suite symbol"/>
                  <img src={ spades } className="suite-symbols" alt="Spades suite symbol"/>
                  <img src={ hearts } className="suite-symbols" alt="Spades suite symbol"/>
                </td>
                <td>King</td>
              </tr>
              <tr>
                <td className='symbol-box2'><span class='symbol-margin'>9</span>
                  <img src={ clubs } className="suite-symbols" alt="Spades suite symbol"/>
                  <img src={ spades } className="suite-symbols" alt="Spades suite symbol"/>
                  <img src={ hearts } className="suite-symbols" alt="Spades suite symbol"/>
                </td>
                <td>Nine</td>
              </tr>
          </table>

          <div className="value-box">
            <div className="table-headings">Card Values</div>
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
            <div className="table-headings">Game Scoring</div>
            <ol className="DK-ol">
              <li>1 Point - for each score (120, 90, 60, 30, 0) not acquired by the opponents</li>
              <li> 1 Point - Ray/Contra-Ray called at the beginning of the game</li>
              <li>1 Point - for each of the following:</li>
              <ul>
                <li>Karlchen: Win last trick with the Jack of Clubs</li>
                <li>Doppelkopf: Win trick with more than 40 points</li>
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
      <>
        <h1>Doppelkopf</h1>
        <button className="rules-bttn-tog" onClick={()=>{this.toggleHide()}}>Game Details</button>
        { gameDetails }
        <BasicScoreView players={this.props.players} updateScore={this.props.updateScore} updateTempScore={this.props.updateTempScore} showDelete={this.props.showDelete} delPlayer={this.props.delPlayer} smallPos={1} smallNeg={-1} mediumPos={5} mediumNeg={-5}/>

      </>
    )
  }
}

export default DoppelkopfView;
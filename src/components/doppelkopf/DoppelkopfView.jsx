import React from 'react';
import './Doppelkopf.css'
import spades from '../../img/spades.png'
import hearts from '../../img/hearts.png'
import clubs from '../../img/clubs.png'
import diamonds from '../../img/diamonds.png'

class DoppelkopfView extends React.Component {

  render(){
    return(
      <div className="basic-container">
        <h1>Doppelkopf</h1>
        <p style={{ color: 'red', margin: 0}}>Under Construction</p>
        <div className="dop-container">
          <table className="trump-box">
            <thead>
              <tr>
                <th colSpan="2" className="table-headings">Trumps</th>
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
            <table>
              <tbody>
                <tr></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default DoppelkopfView;
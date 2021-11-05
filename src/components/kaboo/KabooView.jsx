import React, { useState } from 'react';
import './kaboo.css';
import spades from '../../img/spades.png';
import hearts from '../../img/hearts.png';
import clubs from '../../img/clubs.png';
import diamonds from '../../img/diamonds.png';


const KabooView = () => {
  const [kabooShowDetails, setKabooShowDetails] = useState(false);
  let gameDetails;

  if (kabooShowDetails === true) {
    gameDetails =  <div className="kaboo-game-details-box">
        <div className="kaboo-value-box">
          <h2 className="kaboo-table-headings">Card Values</h2>
          <div className="kaboo-card-values">
            <p>
              <img src={ spades } className="suite-symbols" alt="Spades suite symbol"/>
              <img src={ clubs } className="suite-symbols" alt="Spades suite symbol"/>
              Black Kings: 13
            </p>
            <p>Queen: 12</p>
            <p>Jack: 11</p>
            <p>Ten: 10</p>
            <p>:</p >
            <p>Two: 2</p>
            <p>Ace: 1</p>
            <p>
              <img src={ hearts } className="suite-symbols" alt="Spades suite symbol"/>
              <img src={ diamonds } className="suite-symbols" alt="Spades suite symbol"/>
              Red Kings: 13
            </p>
            <p>Joker: -1</p>
          </div>
        </div>
        <div className="kaboo-action-box">
          <h2 className="kaboo-table-headings">Card Actions</h2>
          <ul className="kaboo-card-actions">
            <li>7/8 - Look at your own card</li>
            <li>9/10 - Look at another player's card</li>
            <li>J/Q - Swap your own card with another players card</li>
            <li>K - Look at another player's card and decide if you want to swap or not</li>
          </ul>              
        </div>
      </div>

  } else {
    gameDetails = <div></div>
  }

  return (
    <>
      <h1>Kaboo (Cabo)</h1>
      <button className="rules-bttn-tog" onClick={()=>{setKabooShowDetails(prevCheck => !prevCheck)}}>Game Details</button>
      { gameDetails }
    </>
  )
}

export default KabooView;
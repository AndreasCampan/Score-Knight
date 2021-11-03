import React, { useState } from 'react';
import './president.css';
import spades from '../../img/spades.png';
import hearts from '../../img/hearts.png';
import clubs from '../../img/clubs.png';
import diamonds from '../../img/diamonds.png';


const PresidentView = () => {
  const [presidentShowDetails, setPresidentShowDetails] = useState(false);
  let gameDetails;

  if (presidentShowDetails === true) {
    gameDetails =  <div className="game-details-box">
        <div className="president.value-box">
          <h2 className="table-headings">Card Values</h2>
          <div className="president-card-values">
            <p>
              <img src={ spades } className="suite-symbols" alt="Spades suite symbol"/>
              <img src={ clubs } className="suite-symbols" alt="Spades suite symbol"/>
              Black Kings: 13
            </p>
            <p>Queen: 12</p>
            <p>Jack: 11</p>
            <p>Ten: 10</p>
            <p>Nine: 9</p>
            <p>Eight: 8</p>
            <p>Seven: 7</p>
            <p>Six: 6</p>
            <p>Five: 5</p>
            <p>Four: 4</p>
            <p>Three: 3</p>
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

  return (
    <>
      <button className="rules-bttn-tog" onClick={()=>{setPresidentShowDetails(prevCheck => !prevCheck)}}>Game Details</button>
      { gameDetails }
    </>
  )
}

export default PresidentView;
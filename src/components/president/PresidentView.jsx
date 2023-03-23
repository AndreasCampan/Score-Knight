import React, { useState } from 'react';
import './president.css';

const PresidentView = () => {
  const [presidentShowDetails, setPresidentShowDetails] = useState(false);
  let gameDetails;

  if (presidentShowDetails === true) {
    gameDetails =  <div>Coming Soon</div>

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
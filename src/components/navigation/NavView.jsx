import React from 'react';
import './navview.css'
import logo from '../../img/sk-logo.svg'

class NavView extends React.Component {

  render(){
    return(
      <div className="nav-container">
        <h1 className="nav-title">Score</h1>
        <img src={logo} alt="Logo for Portfolio websites" className="logo" />
        <h1 className="nav-title2">Knight</h1>
        <div></div>
      </div>
    )
  }
}

export default NavView;
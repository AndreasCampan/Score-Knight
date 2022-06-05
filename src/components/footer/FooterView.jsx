import React from 'react';
import './footer.css'
import aclogo from '../../img/aclogo-footer.png'
import github from '../../img/github-footer.svg'

class FooterView extends React.Component {

  render(){
    return(
      <div className="footer-container">
        <a href="https://www.andreascampan.com/" target="_blank" rel="noreferrer">
          <img src={aclogo} alt="Logo for Portfolio websites" className="footer-icons" />
        </a>
        <a href="https://github.com/AndreasCampan/Score-Knight" target="_blank" rel="noreferrer">
          <img src={github} alt="Logo for github website" className="footer-icons" />
        </a>
      </div>
    )
  }
}

export default FooterView;
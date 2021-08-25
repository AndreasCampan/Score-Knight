import React from 'react';
import './mainview.css';


class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  
  componentDidMount() {
  
  }

  render(){
    return (
      <div className="app-container">
        <h1>Score Knight</h1>
        <div>
          <label for="games">Choose your Game:</label>
          <select name="games" id="games">
            <option value="basic">Basic Score</option>
            <option value="dopplekoff">Dopplekoff</option>
            <option value="rummyo">Rummy-O</option>
            <option value="president">President</option>
            <option value="wizard">Wizard</option>
          </select>
        </div>
      </div>
    );
  }
}

export default MainView

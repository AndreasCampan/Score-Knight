import React from 'react';
import './mainview.css';
import NavView from './navigation/NavView';

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameType: 'basic',
      players: []
    };
  }
  
  componentDidMount() {
  
  }

  handleSelect = (e) => {
    this.setState({
      gameType: e.target.value
    })
  }

  render(){
    let { gameType } = this.state;
    let gameScreen;

    if (gameType === 'basic') {
      console.log('1');
      gameScreen = <div><p>Hello there</p></div>
    } else {
      console.log('2');
      gameScreen = <div><p>Goodbye</p></div>
    }

    return (
      <>
        <NavView />
        <div className="app-container">
          <h1>Score Knight</h1>
          <div>
            <select name="games" id="games" value={this.state.gameType} onChange={this.handleSelect}>
              <option value="basic">Basic Score</option>
              <option value="dopplekoff">Dopplekoff</option>
              <option value="rummyo">Rummy-O</option>
              <option value="president">President</option>
              <option value="wizard">Wizard</option>
            </select>
          </div>
        {gameScreen}
        </div>
      </>
    );
  }
}

export default MainView

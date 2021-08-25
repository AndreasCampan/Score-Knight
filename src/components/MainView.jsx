import React from 'react';
import '.mainview.css';


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
      </div>
    );
  }
}

export default <MainView />

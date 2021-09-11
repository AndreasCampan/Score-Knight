import React from 'react';
import './nameinput.css'

class NameInputView extends React.Component {
  constructor(){
    super();
    this.state = {
      nameInput: ''
    }
  }

  onInput = (e) => {
    this.props.changeDuplicate();
    this.setState({
      nameInput: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.nameInput);
    this.setState({ nameInput: ''});
  }

  render() {
    let messageNum = this.props.duplicateName;
    let dupMessage;

    if (messageNum === 0) {
      dupMessage = <div className="duplicate-name"></div>
    } else if (messageNum === 1) {
      dupMessage = <div className="duplicate-name">Please enter a name!</div>
    } else if (messageNum === 2) {
      dupMessage = <div className="duplicate-name">The player already exists!</div>
    } else {
      dupMessage = <div className="duplicate-name">Max 10 characters</div>
    }

    return(
      <div className="nameInput-container">
        <div className="input-inner-box">
          <h2 className="add-players-title">Add a Player:</h2>
          <form name="Score" onSubmit={this.handleSubmit} className="input-form">
            <input type="text" onChange={this.onInput} value={this.state.nameInput} id="nameinput" placeholder="Type a Name..." />
            <button className="name-sub" type='submit'>Submit</button>
          </form>
        </div>
        { dupMessage }
      </div>
    )
  }
}

export default NameInputView;
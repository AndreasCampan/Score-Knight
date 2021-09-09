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
  }

  render() {
    let messageBool = this.props.duplicateName;
    let dupMessage;

    if (!messageBool) {
      dupMessage = <div className="duplicate-name"></div>
    } else {
      dupMessage = <div className="duplicate-name">This name already exists, please select a different name</div>
    }
    return(
      <div className="nameInput-container">
        <form name="Score" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.onInput} id="nameinput" placeholder="Type a Name..." />
          <button type='submit'>Submit</button>
        </form>
        { dupMessage }
      </div>
    )
  }
}

export default NameInputView;
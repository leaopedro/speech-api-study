import React from 'react';
import './style.less';

class KeyboardInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };

    this.onChangeField = this.onChangeField.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onChangeField(e) {
    const val = e.target.value;
    this.setState({ query: val });
  }

  onKeyUp(e) {
    if (e.keyCode === 13) {
      this.sendMessage();
    }
  }
  sendMessage() {
    if (this.state.query !== '') {
      this.props.receiveUserMessage(this.state.query);
      this.setState({query: ''});
    }
  }

  render() {
    return (
      <div className="keyboard-input-container">
        <input className='keyboard-input' type='text' value={this.state.query} onChange={this.onChangeField}
               onKeyUp={this.onKeyUp}/>
        <button className='send-btn' onClick={this.sendMessage}>
          <i className="fas fa-caret-right"> </i>
        </button>
      </div>
    );
  }

}

KeyboardInput.propTypes = {

};

export default KeyboardInput;

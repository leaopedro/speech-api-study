import React, { PropTypes } from 'react';
import './style.less';

class KeyboardInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };

    this.onChangeField = this.onChangeField.bind(this);
  }

  onChangeField(e) {
    const val = e.target.value;
    this.setState({ query: val });
  }

  render() {
    return (
      <div className="keyboard-input-container">
        <input className='keyboard-input' type='text' value={this.state.query} onChange={this.onChangeField} />
        <button className='send-btn'>
          <i className="fas fa-caret-right"></i>
        </button>
      </div>
    );
  }

}

KeyboardInput.propTypes = {

};

export default KeyboardInput;

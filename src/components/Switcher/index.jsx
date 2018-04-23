import React, { PropTypes } from 'react';
import MicInputContainer from './../../containers/MicInputContainer';
import KeyboardInputContainer from './../../containers/KeyboardInputContainer';
import SpeechUtil from './../../Util/SpeechUtil';

import './style.less';

class Switcher extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: 'mic'
    };
    this.speechUtil = new SpeechUtil();

    this.switch = this.switch.bind(this);
  }
  switch(e) {
    if (this.state.input === 'mic') {
      this.speechUtil.stopRecognition(false);
      this.setState({input: 'keyboard'});
    } else {
      this.setState({input: 'mic'});
    }
  }

  render() {
    const component = this.state.input==='mic'? <MicInputContainer speechUtil={this.speechUtil} /> : <KeyboardInputContainer /> ;
    return (
      <div className="switcher-container">
        <div className='input-container'>
          {component}
        </div>
        <div className='switch' onClick={this.switch}>
          <i className="fas fa-microphone"></i>
          <span className="ui-switch is-animated">
            <input type="checkbox" className="ui-checkbox" />
            <span className="ui-button"></span>
          </span>
          <i className="fas fa-keyboard"></i>
        </div>
      </div>
    );
  }

}

Switcher.propTypes = {

};


export default Switcher;

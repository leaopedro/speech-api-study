import React, { PropTypes } from 'react';
import SpeechUtil from './../../Util/SpeechUtil';
import './style.less';

class MicInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.startRec = this.startRec.bind(this);
  }

  startRec() {
    this.props.speechUtil.startRecognition();
  }

  render() {
    return (
      <div className="mic-input-container">
        <div className='mic-button rounded-circle' onClick={this.startRec}>
          <i className="fas fa-microphone"></i>
        </div>
      </div>
    );
  }

}

MicInput.propTypes = {

};


export default MicInput;

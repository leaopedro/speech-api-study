import React from 'react';
import './style.less';

class MicInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isRecording: false
    };

    this.startRec = this.startRec.bind(this);
    this.recResult = this.recResult.bind(this);
  }

  startRec() {
    this.props.speechUtil.startRecognition(this.recResult);
    this.setState({isRecording: true});
  }

  recResult(query) {
    if (query) {
      this.props.receiveUserMessage(query);
    }
    this.setState({isRecording: false});
  }

  render() {
    const recClass = (this.state.isRecording)? 'rec' : '';
    return (
      <div className={`mic-input-container ${recClass}`}>
        <div className='mic-button rounded-circle' onClick={this.startRec}>
          <i className="fas fa-microphone"> </i>
        </div>
      </div>
    );
  }

}

MicInput.propTypes = {

};


export default MicInput;

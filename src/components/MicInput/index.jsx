import React, { useState } from "react";
import "./style.less";

const MicInput = ({ speechUtil, receiveUserMessage }) => {
  const [isRecording, setIsRecording] = useState(false);
  let recorder;
  const onResult = query => {
    if (query) {
      receiveUserMessage(query);
    }
    setIsRecording(false);
  };

  const startRec = () => {
    if (isRecording && recorder) {
      recorder.stop();
      setIsRecording(false);
      recorder = null;
      return;
    }
    recorder = speechUtil.startRecognition(onResult);
    setIsRecording(true);
    setTimeout(() => {
      console.log("startRec -> setInterval", setInterval);
      if (isRecording && recorder) recorder.stop();
    }, 3000);
  };

  return (
    <div className={`mic-input-container ${isRecording ? "rec" : ""}`}>
      <div className="mic-button rounded-circle" onClick={startRec}>
        <i className="fas fa-microphone"></i>
      </div>
    </div>
  );
};

MicInput.propTypes = {};

export default MicInput;

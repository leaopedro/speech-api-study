import React, { useState } from "react";
import MicInput from "./../MicInput";
import KeyboardInput from "./../KeyboardInput";
import SpeechUtil from "./../../Util/SpeechUtil.js";
import Suggestions from "./../Suggestions";

import "./style.less";

const speechUtil = new SpeechUtil();

const Switcher = ({ receiveUserMessage }) => {
  const [input, setInput] = useState("mic");

  const switchInput = newInput => {
    if (input === "mic") {
      speechUtil.stopRecognition(false);
      setInput("keyboard");
    } else {
      setInput("mic");
    }
  };

  const component =
    input === "mic" ? (
      <MicInput
        speechUtil={speechUtil}
        receiveUserMessage={receiveUserMessage}
      />
    ) : (
      <KeyboardInput receiveUserMessage={receiveUserMessage} />
    );
  return (
    <div className="switcher-container">
      <div className="suggestions-container">
        <Suggestions receiveUserMessage={receiveUserMessage} />
      </div>
      <div className="input-container">{component}</div>
      <div className="switch" onClick={switchInput}>
        <i className="fas fa-microphone"> </i>
        <span className="ui-switch is-animated">
          <input type="checkbox" className="ui-checkbox" />
          <span className="ui-button"> </span>
        </span>
        <i className="fas fa-keyboard"> </i>
      </div>
    </div>
  );
};

Switcher.propTypes = {};

export default Switcher;

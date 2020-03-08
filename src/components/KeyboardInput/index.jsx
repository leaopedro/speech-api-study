import React, { useState } from "react";
import "./style.less";

const KeyboardInput = ({ receiveUserMessage }) => {
  const [query, setQuery] = useState("");

  const onChangeField = e => setQuery(e.target.value);

  const onKeyUp = e => {
    if (e.keyCode === 13) {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (query !== "") {
      receiveUserMessage(query);
      setQuery("");
    }
  };
  return (
    <div className="keyboard-input-container">
      <input
        className="keyboard-input"
        type="text"
        value={query}
        onChange={onChangeField}
        onKeyUp={onKeyUp}
      />
      <button className="send-btn" onClick={sendMessage}>
        <i className="fas fa-caret-right"> </i>
      </button>
    </div>
  );
};

KeyboardInput.propTypes = {};

export default KeyboardInput;

import React from "react";
import "./style.less";

const Suggestions = ({ receiveUserMessage }) => {
  const sugs = ["Hello", "What`s the weather?", "Help", "I love you"];

  return (
    <div className="suggestions">
      {sugs.map((s, i) => {
        return (
          <div
            className="suggestion"
            onClick={() => {
              receiveUserMessage(s);
            }}
            key={`key${s.replace(/\s+/g, "")}`}
          >
            {s}
          </div>
        );
      })}
    </div>
  );
};

Suggestions.propTypes = {};

export default Suggestions;

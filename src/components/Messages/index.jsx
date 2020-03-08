import React from "react";
import PropTypes from "prop-types";
import MessageItem from "./MessageItem.jsx";
import "./style.less";

const Messages = ({ messages }) => {
  const items = messages.map((m, i) => {
    return <MessageItem key={i} message={m} />;
  });
  return <div className="messages-container">{items}</div>;
};

Messages.propTypes = {};

export default Messages;

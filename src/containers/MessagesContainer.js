import { connect } from "react-redux";
import Messages from "../components/Messages";

function mapStateToProps(state) {
  return {
    messages: state.messages.messageList,
    updatedAt: state.messages.updatedAt
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;

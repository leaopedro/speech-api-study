import { connect } from "react-redux";
import Switcher from "../components/Switcher/index.jsx";
import { receiveMessage, triggerSearch } from "../actions";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    receiveUserMessage: query => {
      dispatch(triggerSearch(query));
      dispatch(receiveMessage({ text: query, author: "user" }));
    }
  };
}

const SwitcherContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);

export default SwitcherContainer;

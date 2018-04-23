import { connect } from 'react-redux';
import KeyboardInput from '../components/KeyboardInput';
import {receiveMessage, triggerSearch} from "../actions";
//import { } from '../actions';


function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    triggerSearch: (query) => {
      dispatch(triggerSearch(query));
      dispatch(receiveMessage({text: query, author: 'user'}));
    },
  }
}

const KeyboardInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyboardInput);

export default KeyboardInputContainer

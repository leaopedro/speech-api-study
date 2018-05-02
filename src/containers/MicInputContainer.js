import {connect} from 'react-redux';
import MicInput from '../components/MicInput';
import {receiveMessage, triggerSearch} from '../actions';


function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    receiveUserMessage: (query) => {
           dispatch(receiveMessage({text: query, author: 'user'}));
      dispatch(triggerSearch(query));
       },
  }
}

const MicInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MicInput);

export default MicInputContainer

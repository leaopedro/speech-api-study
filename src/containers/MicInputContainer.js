import { connect } from 'react-redux';
import MicInput from '../components/MicInput';
import { triggerSearch } from '../actions';


function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
       triggerSearch: (query) => {
           dispatch(triggerSearch(query));
       },
  }
}

const MicInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MicInput);

export default MicInputContainer

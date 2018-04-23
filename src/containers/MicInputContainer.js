import { connect } from 'react-redux';
import MicInput from '../components/MicInput';
//import { } from '../actions';


function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
//        onAddSubreddit: (subreddit) => {
//            dispatch(addSubreddit(subreddit));
//        },
  }
}

const MicInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MicInput);

export default MicInputContainer

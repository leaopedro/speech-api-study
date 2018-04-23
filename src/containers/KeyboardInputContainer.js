import { connect } from 'react-redux';
import KeyboardInput from '../components/KeyboardInput';
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

const KeyboardInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyboardInput);

export default KeyboardInputContainer

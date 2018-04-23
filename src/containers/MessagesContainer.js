import { connect } from 'react-redux';
import Messages from '../components/Messages';
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

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer

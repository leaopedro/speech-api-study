import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
//import { } from '../actions';


function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
       // initSpeechService: () => {
       //     dispatch(addSubreddit(subreddit));
       // },
    }
}

const SearchBoxContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBox);

export default SearchBoxContainer

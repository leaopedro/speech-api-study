import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Home from './Home.jsx';
import './../style/main.less';

const App = ({ store }) => {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    )
};

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;

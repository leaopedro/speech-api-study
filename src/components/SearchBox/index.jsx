import React, { PropTypes } from 'react';
import Switcher from './../Switcher';

import './style.less';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};


//        this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <section className="search-box-container">
        <Switcher speechUtil={this.speechUtil} />
      </section>
    );
  }

}

SearchBox.propTypes = {

};


export default SearchBox;

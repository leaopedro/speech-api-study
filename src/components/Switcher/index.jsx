import React, { PropTypes } from 'react';

import './style.less';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

//        this.onSubmit = this.onSubmit.bind(this);
  }
  switch(e) {
    console.log(e);
  }
  render() {
    return (
      <div className="switcher-container">
        <div className='switch' onClick={this.switch}>
          <i className="fas fa-microphone"></i>
          <span className="ui-switch is-animated">
            <input type="checkbox" className="ui-checkbox" />
            <span className="ui-button"></span>
          </span>
          <i className="fas fa-keyboard"></i>
        </div>
      </div>
    );
  }

}

SearchBox.propTypes = {

};


export default SearchBox;

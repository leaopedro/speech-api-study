import React, { PropTypes } from 'react';

import './style.less';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

//        this.onSubmit = this.onSubmit.bind(this);
  }
  switch(e) {

  }
  render() {
    return (
      <div className="switcher-container">
        <div className='switch' onClick={this.switch}></div>
      </div>
    );
  }

}

SearchBox.propTypes = {

};


export default SearchBox;

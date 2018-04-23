import React, { PropTypes } from 'react';
import Switcher from './../Switcher';
import MessagesContainer from './../../containers/MessagesContainer';

import './style.less';

class InputBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};


//        this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <section className="input-box-container">
        <MessagesContainer />
        <Switcher speechUtil={this.speechUtil} />
      </section>
    );
  }

}

InputBox.propTypes = {

};


export default InputBox;

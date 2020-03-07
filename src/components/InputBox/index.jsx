import React from 'react';
import Switcher from './../Switcher';
import MessagesContainer from './../../containers/MessagesContainer.js';
import Header from './../Header';

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
        <Header/>
        <MessagesContainer />
        <Switcher />
      </section>
    );
  }

}

InputBox.propTypes = {

};


export default InputBox;

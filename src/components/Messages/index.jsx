import React from 'react';
import PropTypes from 'prop-types';
import MessageItem from './MessageItem.jsx';
import './style.less';

class Messages extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};


//        this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    const items = this.props.messages.map((m, i) => {
      return (<MessageItem key={i} message={m}/>);
    });
    console.log(items);
    return (
      <div className='messages-container'>
        {items}
      </div>
    );
  }

}

Messages.propTypes = {

};


export default Messages;

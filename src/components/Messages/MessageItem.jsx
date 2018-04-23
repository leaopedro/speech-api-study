import React, {PropTypes} from 'react';

class MessageItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};


//        this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <div className={`message ${this.props.message.author}`}>
        {this.props.message.text}
      </div>
    );
  }

}

MessageItem.propTypes = {};


export default MessageItem;

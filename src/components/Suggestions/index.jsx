import React from 'react';
import './style.less';

class Suggestions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    console.log('TA AQUE FDP');
    this.getSuggestions = this.getSuggestions.bind(this);
  }

  getSuggestions() {
    let sugs = [
      'Hello',
      'What`s the weather?',
      'Help',
      'I love you'
    ];
    return sugs.map((s, i) => {
      console.log(s);
      return (<div className='suggestion' key={i}>{s}</div>);
    });
  }

  render() {
    return (
      <div className='suggestions'>
        {this.getSuggestions()}
      </div>
    );
  }

}

Suggestions.propTypes = {};


export default Suggestions;

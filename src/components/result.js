import React from 'react';

import Darksky from './api/darksky.js/index.js';

export default class Result extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      words: 'Results',
    }
  }

  render() {
    return (
      <React.Fragment>
        {/* <Darksky />
        <Eventbrite />
        <Yelp />
        <Movie /> */}
      </React.Fragment>
    );
  }
}
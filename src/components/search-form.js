import React from 'react';
import superagent from 'superagent';

export default class SearchForm extends React.Component {
  
  constructor(props) {
    super(props);
  
    this.state ={
      locationQuery: '',
    };
  }

  handleInput  = e => {
    let input = e.target.value;
    this.setState({locationQuery: input});
  }

  handleClick = async e => {
    e.preventDefault();
    let currentSearch = this.state.locationQuery;
    let dataObject = await superagent
      .get('https://quiet-island-48990.herokuapp.com/location')
      .query(
      {
        data: currentSearch,
      }
    );
    this.props.locationFunction(dataObject);
    // console.log(dataObject.body); Note: keep for data check
  }

  render() {
    return (
        <div id="search-form">
          <label>Enter City/State</label>
          <input onChange={this.handleInput} />
          <button onClick={this.handleClick}>Submit</button>
        </div>
    );
  }
}


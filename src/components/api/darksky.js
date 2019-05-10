import React from 'react';
import superagent from 'superagent';


export default class Darksky extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      results: [],
    }
  }

  componentDidMount() {
    this.handleResults();
  }

  handleResults = async () => {
    let dataObject = await superagent
      .get('https://quiet-island-48990.herokuapp.com/weather')
      .query(
      {
        data: this.props.location,
      }
    );
    // console.log(dataObject.body); 
    this.setState( {results: dataObject.body} , () => console.log(this.state.results));
  };

  render() {
    return(
      <React.Fragment>
      <div id="results">
        <h1>DarkSky</h1>
        <ul>
          { this.state.results.map((element, idx) => {
            return (
              <li key={idx}>The forecast for { element.time } is: { element.forecast }</li>
            );
          })}
        </ul>
      </div>
      </React.Fragment>
    )
  }
  
}
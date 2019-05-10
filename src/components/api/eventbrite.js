import React from 'react';
import superagent from 'superagent';

export default class Eventbrite extends React.Component {

  constructor(props){
    super(props);

    this.state= {
      results: [],
    }
  }

  componentDidMount(){
    this.handleResults();
  }

  handleResults = async () => {
    let dataObject = await superagent
      .get('https://quiet-island-48990.herokuapp.com/events')
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
      <div id="results">
        <h1>Eventbrite</h1>
        <ul>
          { this.state.results.map((element, idx) => {
            return (
              <li key={idx}>
                <a href={element.link}>{ element.name }</a>
                <p>Event Date: { element.event_date }</p>
                <p>{ element.summary }</p>
              </li>
            );
          })}
        </ul>
      </div>

    )
  }
  
}
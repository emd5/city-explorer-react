import React from 'react';
import superagent from 'superagent';


export default class Movie extends React.Component {
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
      .get('https://quiet-island-48990.herokuapp.com/movies')
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
        <h1>Movie</h1>
        <ul>
          { this.state.results.map((element, idx) => {
            return (
              <li key={idx}>
                <p><span>{ element.title }</span> was relased on { element.released_on }. Out of { element.total_votes } total votes, { element.title } has an average vote of { element.average_votes } and a popularity score of { element.popularity }.</p>
                <img src={ element.image_url } />
                <p>{ element.overview }</p>
              </li>
            );
          })}
        </ul>
      </div>

    )
  }
  
}
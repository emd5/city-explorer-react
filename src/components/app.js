import React from 'react';
import Header from './header.js';
import SearchForm from './search-form.js';
import Map from './api/map.js';
import Darksky from './api/darksky';
import Yelp from './api/yelp.js';
import Movie from './api/movie.js';
import Eventbrite from './api/eventbrite.js';

export default class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      location: {
        search_query: '',
        formatted_query: '',
        latitude: '',
        longitude: ''
      }
    };
  }

  locationSetter = (locationData) => {
    this.setState({location: locationData.body}, () => console.log(locationData.body));
  }

  render() {
    return (
     
      <React.Fragment>
        <Header />
        <main>
        <SearchForm locationFunction={this.locationSetter}></SearchForm>

        <Map latitude={ this.state.location.latitude } longitude={this.state.location.longitude}></Map>
          <div id="result-group">
            {this.state.location.search_query ? <Darksky location={ this.state.location }/> : null }
            {this.state.location.search_query ? <Eventbrite location={ this.state.location }/> : null }
            {this.state.location.search_query ? <Yelp location={ this.state.location }/> : null } 
            {this.state.location.search_query ? <Movie location={ this.state.location }/> : null }
          </div>
        </main>
     
      </React.Fragment>

    );
  }
}

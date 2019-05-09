import React from 'react';
import Header from './header.js';
import SearchForm from './search-form.js';
import Map from './map.js';
import Result from './result.js';

class App extends React.Component {
  
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
    this.setState({location: locationData.body}, () => console.log(this.state.location) );
  }

  render() {
    return (
     
      <React.Fragment>
        <p>{this.state.location.formatted_query}</p>
        <Header />
        <SearchForm locationFunction={this.locationSetter}></SearchForm>
        <h3>{this.state.location.search_query}</h3>

        <Map latitude={ this.state.location.latitude } longitude={this.state.location.longitude}></Map>
        <Result></Result>
        <Result></Result>
        <Result></Result>
        <Result></Result>
        <Result></Result>
      </React.Fragment>

    );
  }
}

export default App;

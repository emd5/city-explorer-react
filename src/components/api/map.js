import React from 'react';

export default class Map extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div id="map">
          <img src= {`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.latitude}%2c%20${this.props.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GEOCODE_API_KEY}`} alt="Google Maps"/>
        </div>
      </React.Fragment>
    );
  }
}





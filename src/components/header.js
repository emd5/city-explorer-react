import React from 'react';
import headerImg from '../img/city.jpg';

export default class Header extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: 'City Explorer',
    }
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <img src={headerImg} alt='city image'/>
          <h1>{this.state.title}</h1>
        </header>
      </React.Fragment>
    );
  }
}

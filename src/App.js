import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      words: 'Header Component',
    }
  }

  render() {
    return (
      <div>
        <h3>{this.state.words}</h3>
      </div>
    );
  }
}

class Main extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      words: 'Main Component',
    }
  }

  render() {
    return (
     
      <div>
        <h3>{this.state.words}</h3>
         <Map></Map>
         <SearchForm></SearchForm>
         <Result></Result>
         <Result></Result>
         <Result></Result>
         <Result></Result>
         <Result></Result>
      </div>

    );
  }
}

class Search extends React.Component {
  constructor(props) {
    super(props);
  
    this.state ={
      words: 'Search Component',
    };
  }

  render() {
    return (
        <div>
          <h3>{this.state.words}</h3>
          <input />
          <button>Click Me</button>
        </div>
    );
  }
}

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: 'Map Component'
    }
  }
  render() {
    return (
      <div>
        <img src="https://via.placeholder.com/600x400"></img>
      </div>
    );
  }
}

class Result extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae nulla ipsum. Integer non varius arcu. Maecenas eleifend orci et pretium accumsan. Suspendisse scelerisque nunc ac venenatis suscipit. Nam eu posuere dui. Aliquam eget ultrices est, id sagittis libero. Maecenas finibus feugiat diam. Suspendisse a tempus mauris. Sed tincidunt efficitur metus eu fermentum. Etiam efficitur semper neque, et hendrerit nisi ultrices euismod',
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.words}</p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    )
  }
}
export default App;

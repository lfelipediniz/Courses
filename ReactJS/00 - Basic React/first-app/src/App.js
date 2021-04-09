import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  state = { phrase: "Don't click on me!", counter: 0 };

  handlePClick = () => { this.setState({ phrase: 'Oh no, I was clicked!' }); } /*/ using arrow function to avoid 
  problems with "this" /*/

  handleAClick = (event) => {

    event.preventDefault();

    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {

    const { phrase, counter } = this.state;

    return (

      <div className="App">

        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />

          <p onClick={this.handlePClick}> {phrase}<br />{counter} </p>
          
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link that doesn't do the link function</a>

        </header>
      </div>
    );
  }
}
export default App;
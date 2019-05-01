import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cloud from './Cloud.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Cloud lyrics="akhdfaklsh haskhfw sdffdk asdfdjjd apple apple jsx jsx hahah jsx jsx jsx jsx"/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
      </div>
      );
    }
}


export default App;

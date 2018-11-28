import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GithubCard from './components/github-card'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GithubCard />
      </div>
    );
  }
}

export default App;

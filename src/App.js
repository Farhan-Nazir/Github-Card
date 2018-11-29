import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import GithubProfile from "./components/github-profile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GithubProfile />
      </div>
    );
  }
}

export default App;

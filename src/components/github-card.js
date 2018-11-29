import React, { Component } from "react";
import PropTypes from "prop-types";

const API = `https://api.github.com/users/`;

class GithubCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Farhan-Nazir"
    };
  }
  componentDidMount() {
    this.fetchData(this.state.username);
  }
  fetchData = (username => {
    fetch(API + username)
      .then(res => res.json())
      .then(data => {
        return this.props.Username(data)
      })
      .catch(err => err);
  })();

  handleChange = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.username}
          onChange= {this.handleChange}
          onKeyPress={e => e.charCode == 13 ? this.fetchData(this.state.username) : false}
        />
      </div>
    );
  }
}

GithubCard.propTypes = {};

export default GithubCard;

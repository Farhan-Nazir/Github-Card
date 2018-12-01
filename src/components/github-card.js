import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';

const API = `https://api.github.com/users/`;

class GithubCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Farhan-Nazir"
    };
    
  }
  fetchData = username => {
    fetch(API + username)
      .then(res => res.json())
      .then(data => {
        return this.props.Username(data)
      })
      .catch(err => err);
  };
  componentDidMount() {
    this.fetchData(this.state.username);
  }
  

  handleChange = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div>
        <TextField
          required
          id="outlined-required"
          label="Username"
          defaultValue={this.state.username}
          margin="normal"
          variant="outlined"
          value={this.state.username}
          onChange= {this.handleChange}
          onKeyPress={e => e.charCode == 13 ? this.fetchData(this.state.username) : false}
          style={{width: 500}}
        />
      </div>
    );
  }
}

GithubCard.propTypes = {};

export default GithubCard;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GithubCard from './github-card';

class GithubProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Farhan-Nazir",
            avatar: "",
            follow: "",
            followers: "",
            repo: "",
            data: {}

        }
    }

    render() {
        return (
            <div>
                <GithubCard Username={e => this.setState({data: e})}/>
                
            </div>
        );
    }
}

GithubProfile.propTypes = {

};

export default GithubProfile;
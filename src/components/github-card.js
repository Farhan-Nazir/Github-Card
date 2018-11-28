import React, { Component } from 'react';
import PropTypes from 'prop-types';
 
const API = `https://api.github.com/users/`;


class GithubCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Farhan-Nazir",
            avatar: "",
            
        }
    }
    ;
    componentDidMount(){
        this.fetchData(this.state.username);
        
    }
   fetchData = (username) => {
    fetch(API+username)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        this.setState({avatar: data.avatar_url})
    })
    .catch(err => err)
   }
   getNew = () => {
       if(this.state.username === "Farhan-Nazir"){
        this.setState({username: "HackYourFuture"});
       } else {
        this.setState({username: "Farhan-Nazir"});
       }
    
    this.fetchData(this.state.username);
}

    render() {
        
        return (
            <div>
                <img src={this.state.avatar} alt={this.state.username} />
                <button type="button" onClick={this.getNew}>Change me</button>
            </div>
        );
    }
}

GithubCard.propTypes = {

};

export default GithubCard;
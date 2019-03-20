import React, { Component } from 'react';
import axios from "axios";

import Users from "./Components/Users"

import './App.css';

class App extends Component {
  state = { 
    users: []
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/users")
    .then(response => {
      this.setState({
        users: response.data
      })
    })
    .catch(error => console.log(error))
  }


  render() {
    return (
      <div>
        <Users users={this.state.users} /> 
      </div>
    );
  }
}

export default App;

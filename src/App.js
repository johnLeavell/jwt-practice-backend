import './App.css';
import React, { Component } from 'react'

export class App extends Component {
  constructor(){
    super()
    this.state = {
      users: [],
      balloons: [],
    }
  }

  componentDidMount = () => {
    this.fetchUsers()
    this.fetchBalloons()
  }


  fetchUsers = () => {
    fetch(`http://localhost:3000/users`)
    .then( resp => resp.json())
    .then( users => 
      this.setState({
        users: users
      }))
  }

  fetchBalloons = () => {
    fetch(`http://localhost:3000/balloons`)
    .then( resp => resp.json())
    .then( balloons => 
      this.setState({
        balloons: balloons
      }))
  }


  render() {
    console.log(this.state);
    
    return (
      <div>

      </div>
    )
  }
}

export default App

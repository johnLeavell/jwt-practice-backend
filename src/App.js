import './App.css';
import React, { Component } from 'react';
import Login from './components/Login';
import { BrowserRouter, Route } from 'react-router-dom'
import { SignUp } from './components/SignUp';
import Home from './components/Home';

export class App extends Component {
  constructor(){
    super()
    this.state = {
      users: [],
      balloons: [],
      loggedInUser: {
        balloons: []
      }
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

  handleUserLogin =(userLogin) => {
    const reqObj ={
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userLogin)
    }

    fetch(`http:localhost:3000/login`, reqObj)
    .then(resp => resp.json())
    .then( user => {
      this.setState({
        loggedInUser: user
      });
    })
  }


  render() {
    console.log(this.state);
    
    return (
      <BrowserRouter>
        <div>
          <Route path='/login' render={ (props) => <Login {...props} handleUserLogin={this.handleUserLogin} /> } />          
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/home' component={Home} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App

import React, { Component } from 'react'

export class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            loggedIn: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        this.props.handleUserLogin(this.state)
        this.setState({
            username: "",
            password: "",
            loggedIn: true
        })
        this.props.history.push('/home')
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange}
                        type="text"
                        placeholder="Username"
                        name="username"
                        required
                        value={this.state.username}
                    />
                    <input onChange={this.handleChange}
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        value={this.state.password}
                    />
                    <button 
                        className="login"
                        type="submit"
                        >Login</button>
                </form>
            </div>
        )
    }
}

export default Login

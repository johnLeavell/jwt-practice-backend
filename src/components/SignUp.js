import React, { Component } from 'react'

export class SignUp extends Component {
    state = {
        username: '',
        password: '',
        passwordConfirmation: '',
    }

    handleSubmit = e => {
        e.preventDefault()
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <div className="center-form">
                <form className="signup-form"
                    onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        type="text" 
                        name="username"
                        value={this.state.username}
                        placeholder="Username"
                        required
                    />
                     <input 
                        onChange={this.handleChange}
                        type="password"
                        name="password"
                        value={this.state.password}
                        placeholder="Password"
                        required
                    />
                     <input 
                        onChange={this.handleChange}
                        type="password"
                        name="confirmPassword"
                        value={this.state.ConfirmPassword}
                        placeholder="Confirm Password"
                        required
                    />
                    <button 
                        className="singup"
                        type="submit"
                        >Sign Up</button>
                </form>
                
            </div>
        )
    }
}

export default SignUp

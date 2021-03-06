import React, { Component } from 'react'

export class SignIn extends Component {
    state = {
        fname: null,
        lname: null,
        email: null,
        password: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
         }
        )
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={ this.handleSubmit }>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" onChange={ this.handleChange } />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" onChange={ this.handleChange } />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={ this.handleChange } />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={ this.handleChange } />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn

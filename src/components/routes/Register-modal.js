import React, { Component } from "react";

export class Register extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.confirmPasswordsMatch = this.confirmPasswordsMatch.bind(this)
    }

    confirmPasswordsMatch() {

    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:8081/user', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'id':this.id.value,
                'firstName': this.firstName.value,
                'lastName': this.lastName.value,
                'email': this.email.value,
                'password': this.password.value
            })
        });
    };
    render() {
        return (
            <div className='login-form-container' >
                <form className='login-form'>
                    <label>Id:</label>
                    <input ref={(ref) => { this.id = ref }} type='text' id='id' placeholder='id'></input>
                    <label>First Name</label>
                    <input ref={(ref) => { this.firstName = ref }} type='text' id='firstName' placeholder='First name'></input>
                    <label>Last Name</label>
                    <input ref={(ref) => { this.lastName = ref }} type='text' id='lastName' placeholder='Last Name'></input>
                    <label>Email</label>
                    <input ref={(ref) => { this.email = ref }} type='text' id='email' placeholder='Enter your email'></input>
                    <label>Password</label>
                    <input ref={(ref) => { this.password = ref }} type='password' id='password' placeholder='Enter a password'></input>
                    <label>Confirm Password</label>
                    <input ref={(ref) => { this.confirmPassword = ref }} type='password' id='confirm_password' onChange={this.confirmPasswordsMatch} placeholder='Confirm password'></input>
                    <button type='submit' onClick={this.handleSubmit}>Register</button>
                </form>
                {/* <GetAllUsers/> */}
            </div>
        )
    }
}
export default Register;
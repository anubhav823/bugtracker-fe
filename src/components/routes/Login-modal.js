import { Component } from "react";

export class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:8081/user/login', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'email': this.email.value,
                'password': this.password.value
            })
        });
    };
    render() {
        return (
            <div className='login-form-container'>
                <form className='login-form'>
                    <label>Email</label>
                    <input ref={(ref) => { this.email = ref }} type='text' id='email' placeholder='Enter your email'></input>
                    <label>Password</label>
                    <input ref={(ref) => { this.password = ref }} type='password' id='password' placeholder='Enter a password'></input>
                    <button type='submit' onClick={this.handleSubmit}>Login</button>
                </form>
            </div>
        )
    }
}
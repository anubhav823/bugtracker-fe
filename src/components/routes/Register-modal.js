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
                    <label>First Name</label>
                    <input ref={(ref) => { this.firstName = ref }} type='text' id='firstName' placeholder='First name'></input>
                    <label>Last Name</label>
                    <input ref={(ref) => { this.lastName = ref }} type='text' id='lastName' placeholder='Last Name'></input>
                    <label>Email</label>
                    <input ref={(ref) => { this.email = ref }} type='text' id='email' placeholder='Enter your email'></input>
                    <label>Password</label>
                    <input ref={(ref) => { this.password = ref }} type='password' id='password' placeholder='Enter a password'></input>
                    <label>Confirm Password</label>
                    <input ref={(ref) => { this.firstName = ref }} type='password' id='confirm_password' onChange={this.confirmPasswordsMatch} placeholder='Confirm password'></input>
                    <button type='submit' onClick={this.handleSubmit}>Register</button>
                </form>
            </div>
        )
    }
}
//     state = { show: false };
//     showRegisterModal = () => {
//         this.setState({ show: true });
//     };
//     hideRegisterModal = () => {
//         this.setState({ show: false });
//     };
//     render() {
//         return (
//             <Modal show={this.state.show} handleClose={this.hideRegisterModal}>
//                     <div className='registration-form-container'>
//                         <form className='registration-form'>
//                             <label>First Name</label><input className='registration-input' type='text' id='firstName' placeholder='Enter your first name'></input>
//                             <label>Last Name</label><input className='registration-input' type='text' id='lastName' placeholder='Enter your last name'></input>
//                             <label>Email</label><input type='text' id='email' placeholder='Enter your email'></input>
//                             <label>Password</label><input className='registration-input' type='password' id='password' placeholder='Enter a password'></input>
//                             <label>Enter your password once more</label><input className='registration-input' type='password' id='password-confirmation' placeholder='Confirm password'></input>
//                             <button type='submit'>Register</button>
//                         </form>
//                     </div>
//             </Modal>

//         )
//     }
// }
// const Modal = ({ handleClose, show, children }) => {
//     const showHideClassName = show ? 'modal display-block' : 'modal display-none';
//     return (
//         <div className={showHideClassName}>
//             <section className='modal-main'>
//                 {children}
//                 <button onClick={handleClose}>Close</button>
//             </section>
//         </div>
//     )
// }
// const container = document.createElement('div')
// document.body.appendChild(container)
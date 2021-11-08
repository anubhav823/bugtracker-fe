import React from 'react'
import './styles.css'
export class Register extends React.Component {
    state = { show: false };
    showRegisterModal = () => {
        this.setState({ show: true });
    };
    hideRegisterModal = () => {
        this.setState({ show: false });
    };
    render() {
        return (
            <Modal show={this.state.show} handleClose={this.hideRegisterModal}>
                    <div className='registration-form-container'>
                        <form className='registration-form'>
                            <label>First Name</label><input className='registration-input' type='text' id='firstName' placeholder='Enter your first name'></input>
                            <label>Last Name</label><input className='registration-input' type='text' id='lastName' placeholder='Enter your last name'></input>
                            <label>Email</label><input type='text' id='email' placeholder='Enter your email'></input>
                            <label>Password</label><input className='registration-input' type='password' id='password' placeholder='Enter a password'></input>
                            <label>Enter your password once more</label><input className='registration-input' type='password' id='password-confirmation' placeholder='Confirm password'></input>
                            <button type='submit'>Register</button>
                        </form>
                    </div>
            </Modal>

        )
    }
}
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
                <button onClick={handleClose}>Close</button>
            </section>
        </div>
    )
}
const container = document.createElement('div')
document.body.appendChild(container)
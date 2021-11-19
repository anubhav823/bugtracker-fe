import { LoginModal } from './routes/Login-modal'
import './styles.css'
import { Outlet, Link } from "react-router-dom";
import { Register } from './routes/Register-modal';

export function NavBar() {
    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-link'>
                    <Link to='/'>Home</Link>
                </div>
                <div className='navbar-link'>
                    <Link to='/delete'>Delete</Link>
                </div>
                <div className='navbar-link'>
                    <Link to='/issues'>Issues</Link>
                </div>
                <div className='navbar-link'>
                    <Link to='/newissue'>Create New Issue</Link>
                </div>
                <div className='navbar-link'>
                    <Link to='/myissues'>My Issues</Link>
                </div>
                <input type='text' placeholder='Search issues...'></input>
                <div className='navbar-button'>
                    <Link to='/register'><button type='button' onClick={Register} className='navbar-button'>Register</button></Link>
                </div>
                <div className='navbar-button'>
                    <Link to='/login'><button type='button' onClick={LoginModal} className='navbar-button'>Login</button></Link>
                </div>

            </div>
            <Outlet />
        </div>
    )
}
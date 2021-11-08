import { LoginModal } from './Login-modal'
import './styles.css'
import { Outlet, Link } from "react-router-dom";

export function NavBar() {
    return (
        <div className='navbar'>
            <div className='navbar-container'>
            <div className='navbar-link'>
                    <Link to='/'>Home</Link>
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
                <input type='text' placeholder='Search...'></input>
                <button type='button' className='navbar-button'>Register</button>
                <button type='button' onClick={LoginModal} className='navbar-button'>Login</button>
            </div>
            <Outlet />
        </div>
    )
}
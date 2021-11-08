export function LoginModal() {
    console.log('login')
    return (
        <div className='login-form-container'>
            <form className='login-form'>
                <label>Email</label>
                <input type='text' id='email' placeholder='Enter your email'></input>
                <label>Password</label>
                <input type='password' id='password' placeholder='Enter a password'></input>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
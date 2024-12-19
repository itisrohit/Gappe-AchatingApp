import React from 'react'
import { Link } from 'react-router-dom'
import './stylesheets/Login.css'

const Login = () => {
  return (
    <div className="login">
        <div className="container">
            <div className="textual">
                <h3>Login to Account</h3>
            </div>
            <div className="content-part">
                <div className="registration-form">
                    <form action="/login" method='post'>
                        <input type="text" name="userName" id="userName" placeholder='Enter Username' />
                        <input type="password" name='password' id='password' placeholder='Enter Password' />
                        <button type="submit">Login in</button>
                    </form>
                </div>
                <div className="existing-account">
                    <p>Don&apos;t have an account? <Link to="/register">Create Account</Link></p>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default Login

import React from 'react'
import './stylesheets/Registration.css'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <div className="registration">
        <div className="container">
            <div className="textual">
                <h3>Create An Account</h3>
            </div>
            <div className="content-part">
                <div className="registration-form">
                    <form action="/register" method='post'>
                        <input type="text" name="fullName" id="fullName" placeholder='Enter your Full Name' />
                        <input type="text" name="userName" id="userName" placeholder='Enter Username' />
                        <input type="password" name='password' id='password' placeholder='Enter Password' />
                        <input type="password" name='confirmPassword' id='confirmPassword' placeholder='Confirm Password' />
                        <select name="gender" id="gender">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                <div className="existing-account">
                    <p>Already have an account? <Link to="/signin">Sign in</Link></p>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default Registration

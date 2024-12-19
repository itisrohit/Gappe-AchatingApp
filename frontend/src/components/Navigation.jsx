import React from 'react'
import './stylesheets/Navigation.css'
import { Link } from 'react-router-dom'


const Navigation = () => {
  return (
    <div className="navigation">
        <div className="logo">
            <img src="/logo.png" alt="logo" />
        </div>
        <div className="nav-content">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/signin">Login</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navigation

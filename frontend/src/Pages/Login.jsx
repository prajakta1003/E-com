import React from 'react'
import './CSS/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Login</h1>
          <div className="loginsignup-fields">
            <input type="email" placeholder='Email address' />
            <input type="password" placeholder='Password' />
          </div>
          <button>Login</button>
          <p className='loginsignup-login'>Don't have an account <Link to={`/signup`}><span>Register here</span></Link></p>
        </div>
    </div>
  )
}

export default Login
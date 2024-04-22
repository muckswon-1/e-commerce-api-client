import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <p>Login to continue shopping</p>
        <form>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" required/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required/>
            </div>
        </form>
        <p>Don't have an account? <Link to='/register'>Click here to register</Link></p>
    </div>
  )
}

export default Login
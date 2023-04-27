import React, { useState } from "react";
import './login_register.css'
import { useLocation } from "react-router-dom"


export const Login = () => {
  const location = useLocation()
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

    return (
  <>
    <section className="toppy">
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1>Login</h1>
      </section>
      <div className="margin"></div>
       
        <div className="apple">
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form">
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <a href="/register">Don't have an account? Register here.</a>
        </div>
        </div>
        </>
    )
}

export default Login;
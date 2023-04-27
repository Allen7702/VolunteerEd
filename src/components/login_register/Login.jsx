import React, { useState } from "react";
import './login_register.css'


export const Login = () => {

  const authenticate=()=>{
    try {
      console.log("hello there {$email}")
    } catch (error) {
      console.error(error)
    }
  }
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

    return (
  <>
    <section className="toppy">
    <div className="apple">
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={authenticate}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <a href="/register">Don't have an account? Register here.</a>
        </div>
        </div>
      </section>
      <div className="margin"></div>
       
        
        </>
    )
}

export default Login;
import React, { useState } from "react";
import './login_register.css'
import { withRouter } from 'react-router-dom';



export const Login = ({ history }) => {

  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  
  const authenticate = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // user is authenticated, redirect to dashboard or home page
        console.log('User authenticated:', data);
        history.push('/');
      } else {
        // authentication failed, display error message
        console.error('Authentication failed:', data);
      }
    } catch (error) {
      console.error(error);
    }
  };

    return (
  <>
    <section className="toppy">
   
    <div className="apple">
        <div className="auth-form-container z-10">
            <h2>Login</h2>
            <form className="login-form" onSubmit={(event) => authenticate(event, history)}>
           
                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="Email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={(e) => setPass(e.target.value)}  placeholder="Password" id="password" name="password" />
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

export default withRouter(Login);
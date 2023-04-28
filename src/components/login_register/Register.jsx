import React, { useState } from "react";
import "./login_register.css";
import axios from 'axios';
// import { useLocation } from "react-router-dom";


  const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log('Submitting form...');
  
      const response = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
  
      const data = await response.json();
  
      console.log(data);
    };
  return (
    <>
      <section className="toppy">
      <div className="apple">
        <div className="auth-form-container">
          <h2>Register</h2>
          <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Name</label>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Name"
              id="name"
              name="name"
            />
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Email"
              id="email"
              name="email"
            />
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              id="password"
              name="password"
            />
            <button type="submit">Sign up</button>
          </form>
          <a href="/login">Already have an account? Login here.</a>
        </div>
      </div>
      </section>
      <div className="margin"></div>

      
    </>
  );
};

export default Register;

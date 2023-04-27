import React, { useState } from "react";
import "./login_register.css";
// import { useLocation } from "react-router-dom";

export const Register = () => {
  // const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  return (
    <>
      <section className="toppy">
      <div className="apple">
        <div className="auth-form-container">
          <h2>Register</h2>
          <form className="register-form">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              id="email"
              name="email"
            />
            <label htmlFor="password">password</label>
            <input
              value={password}
              onChange={(e) => setPass(e.target.value)}
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

import React from 'react'
import "./Login.css";
import hostelImage from "./assets/hostel.png";
const Login = () => {
  return (
    <div className="login-container"
     style={{ backgroundImage: `url(${hostelImage})` }}
    >
      <div className="login-box">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Enter Username"
          className="input-field"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="input-field"
        />

        <button className="login-btn">Login</button><br></br>
        <p>Don't have an account? <a href="register">Register here</a></p>
      </div>
    </div>
  )
}

export default Login;

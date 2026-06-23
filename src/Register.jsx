import React from "react";
import "./Register.css";
import hostelImage from "./assets/hostel.png";
function Register() {
  return (
    <div className="login-container"
         style={{ backgroundImage: `url(${hostelImage})` }}
    >
      <div className="register-box">
        <h2>Student Registration</h2>

        <input
          type="text"
          placeholder="Enter Full Name"
          className="input-field"
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="input-field"
        />

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

        <input
          type="password"
          placeholder="Confirm Password"
          className="input-field"
        />

        <button className="register-btn">Register</button>
        <p>Already have an account <a href="/">Login here</a></p>
      </div>
    </div>
  );
}

export default Register;
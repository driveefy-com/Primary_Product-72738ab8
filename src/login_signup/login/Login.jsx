import React from "react";
import "./Login.scss";
import { useState } from "react";
import loginIcon from "../assets/icons/loginIcon.jpg";
function Login() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  return (
    <div className="main-container">
      <div className="img-container"></div>
      <div className="form-container">
        <img src={loginIcon} alt="" />
        <h1>Login to Driveefy</h1>
        <button>Login with Google</button>
        <div className="line-container">
        <hr/>
        <p>or login with email</p>
        </div>
        <form>
          {/* Email Field */}
          <div className="input-container">
            <input
              type="email"
              required
              className={`input-field ${emailFocused ? "focused" : ""}`}
              onFocus={() => setEmailFocused(true)}
              onBlur={(e) => setEmailFocused(e.target.value !== "")}
            />
            <div className="placeholder">Email</div>
          </div>

          {/* Password Field */}
          <div className="input-container">
            <input
              type="password"
              required
              className={`input-field ${passwordFocused ? "focused" : ""}`}
              onClick={() => setPasswordFocused(false)}
              onBlur={(e) => setPasswordFocused(e.target.value !== "")}
            />
            <div className="placeholder">Password</div>
          </div>
          <button>Login</button>
        </form>
        <h3>Dont have an account? create account</h3>
      </div>
    </div>
  );
}

export default Login;

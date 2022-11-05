import React from "react";
import logo from "../../assests/images/logo.svg"
import auth_banner from "../../assests/images/auth_banner.svg"
import "./Login.scss"

const Login = () => {
  return (
    <div className="wrapper">
      <div className="auth-sidebar">
        <img className="logo" src={logo} alt="lendsqr logo" />
        <img className="auth-banner" src={auth_banner} alt="login banner" />
      </div>

      <form className="auth-form">
        <h1 className="form-title">Welcome!</h1>
        <p className="form-desc">Enetr details to login.</p>
        <input className="email-input" type='text' placeholder="Email" />
        <input className="pass-input" type='password' placeholder="Password" />
        <p>FORGOT PASSWORD?</p>
        <button className="form-btn">LOG IN</button>
      </form>
    </div>
  );
};

export default Login;

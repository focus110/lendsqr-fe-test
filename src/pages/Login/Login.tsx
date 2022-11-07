import React from "react";
import logo from "../../assests/images/logo.svg"
import auth_banner from "../../assests/images/auth_banner.svg"
import { Link } from "react-router-dom"
import "./Login.scss"

const Login = () => {
  const onSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    <div className="container wrapper">
      <div className="auth-sidebar">
        <img className="logo" src={logo} alt="lendsqr logo" />
        <img className="auth-banner" src={auth_banner} alt="login banner" />
      </div>

      <div className="form-box">
        <form onSubmit={onSubmit} className="auth-form">
          <img className="form__logo" src={logo} alt="lendsqr logo" />
          <h1 className="form-title">Welcome!</h1>
          <p className="form-desc">Eenter details to login.</p>
          <input className="email-input" type='text' placeholder="Email" />
          <input className="pass-input" type='password' placeholder="Password" />
          <Link className="link" to="#">
            <p className="link-text">FORGOT PASSWORD?</p>
          </Link>
          <button className="form-btn">LOG IN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { Fragment, useState } from "react";
import "../SignUp/SignUp.css";
import Or from "../Or/Or";

const SignUp = ({ onSignUp }) => {
  const [formState, setFormState] = useState({
    fullName: "",
    userName: "",
    password: "",
    mobileOrEmail: "",
  });

  const handelChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handelClick = () => {
    onSignUp(formState);
  };

  return (
    <Fragment>
      <div className="signup__text">
        <p>Sign up to see photos and videos from your friends.</p>
      </div>
      <button className="loginpage__login-btn loignup__fb">
        Log in with Facebook
      </button>
      <Or />
      <div className="loginpage__login">
        <input
          className="loginpage__input"
          type="text"
          placeholder="Mobile number or Email"
          value={formState.mobileOrEmail}
          onChange={handelChange}
          name="mobileOrEmail"
        />
        <input
          className="loginpage__input"
          type="text"
          placeholder="Full name"
          value={formState.fullName}
          onChange={handelChange}
          name="fullName"
        />
        <input
          className="loginpage__input"
          type="text"
          placeholder="Username"
          value={formState.userName}
          onChange={handelChange}
          name="userName"
        />
        <input
          className="loginpage__input"
          type="password"
          placeholder="Password"
          value={formState.password}
          onChange={handelChange}
          name="password"
        />
        <button className="loginpage__login-btn" onClick={handelClick}>
          Sign up
        </button>
      </div>
    </Fragment>
  );
};

export default SignUp;

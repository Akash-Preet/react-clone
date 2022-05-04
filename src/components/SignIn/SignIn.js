import React, { Fragment, useState } from "react";
import "../LoginPage/LoginPage.css";
import Or from "../Or/Or";

const SignIn = ({ onLogin }) => {
  const [formState, setFormState] = useState({
    userName: "",
    password: "",
  });

  const handelChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handelClick = () => {
    onLogin(formState);
  };

  return (
    <Fragment>
      <div className="loginpage__login">
        <input
          className="loginpage__input"
          type="text"
          placeholder="Phone number, username or email"
          name="userName"
          onChange={handelChange}
          value={formState.userName}
        />
        <input
          className="loginpage__input"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handelChange}
          value={formState.password}
        />
        <button
          className="loginpage__login-btn"
          type="submit"
          onClick={handelClick}
        >
          Log in
        </button>
      </div>
      <Or />
    </Fragment>
  );
};

export default SignIn;

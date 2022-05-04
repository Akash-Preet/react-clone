//Js
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import LoginCarousel from "../LoginCarousel/LoginCarousel";
import LoginFooter from "../LoginFooter/LoginFooter";
import AppFooter from "../AppFooter/AppFooter";

//css
import "./LoginPage.css";

//material ui
import Grid from "@mui/material/Grid";

//assets
// import instagram_mobile from "../../assets/9364675fb26a.svg";
import instagram_logo from "../../assets/logoinsta.png";
import fb from "../../assets/fb.png";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLogIn, setIsLogIn] = useState(true);

  const switchSignInView = () => {
    setIsLogIn(!isLogIn);
  };

  const handelLogin = (data) => {
    debugger;
    const headers = {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    };

    axios
      .post("https://7s24ygcgb5.execute-api.us-east-1.amazonaws.com/authUser", {
        headers: headers,
        data: data,
      })
      .then((res) => {
        if (!res.data) {
          return null;
        } else {
          navigate("/home");
        }
      });
  };

  const handelSignUp = (data) => {
    const headers = {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    };
    axios
      .post("https://7s24ygcgb5.execute-api.us-east-1.amazonaws.com/addUser", {
        headers: headers,
        data: data,
      })
      .then((res) => {
        if (!res.data) {
          return null;
        } else {
          navigate("/home");
        }
      });
  };

  return (
    <Fragment>
      <div className="loginpage__container">
        <Grid container>
          <Grid item xs={12} className="loginpage__grid-item">
            <div className="loginpage__main">
              {isLogIn ? <LoginCarousel /> : null}
              <div>
                <div className="loginpage__logincomponent">
                  <img
                    className="loginpage__logo"
                    src={instagram_logo}
                    alt="instagram_logo"
                  />
                  {isLogIn ? (
                    <Fragment>
                      <SignIn onLogin={handelLogin} />
                      <div className="loginpage__fb">
                        <img src={fb} alt="fb_logo" width="15px" />
                        Log in with Facebook
                      </div>
                      <div className="loginpage__fp"> Forgot password?</div>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <SignUp onSignUp={handelSignUp} />
                      <div className="loginpage__footer-signup">
                        By signing up, you agree to our Terms , Data Policy and
                        Cookies Policy .
                      </div>
                    </Fragment>
                  )}
                </div>
                <div className="loginpage__switchbox">
                  {isLogIn ? (
                    <div className="loginpage__switchbox--signup">
                      Don't have an account?{" "}
                      <span onClick={switchSignInView}>Sign up</span>
                    </div>
                  ) : (
                    <div className="loginpage__switchbox--login">
                      Have an account?{" "}
                      <span onClick={switchSignInView}>Log in</span>
                    </div>
                  )}
                </div>
                <AppFooter />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <LoginFooter />
    </Fragment>
  );
};

export default LoginPage;

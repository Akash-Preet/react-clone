import React from "react";
import "../LoginPage/LoginPage.css";
import playstore from "../../assets/play.png";
import appstore from "../../assets/app.png";

const AppFooter = () => {
  return (
    <div className="loginpage__downloadapp">
      <div className="loginpage__downloadapp--text">Get the app.</div>
      <div className="loginpage__downloadapp--img-container">
        <img
          className="loginpage__downloadapp--img"
          src={appstore}
          alt="appstore"
          width="136px"
        />
        <img
          className="loginpage__downloadapp--img"
          src={playstore}
          alt="playstore"
          width="136px"
        />
      </div>
    </div>
  );
};

export default AppFooter;

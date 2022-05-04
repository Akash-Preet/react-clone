import React from "react";
import "../LoginPage/LoginPage.css";

const LoginFooter = () => {
  return (
    <div className="loginpage__footer">
      <div className="loginpage__footer--list">
        <ul>
          <li>Meta</li>
          <li>About</li>
          <li>Blog</li>
          <li>Jobs</li>
          <li>Help</li>
          <li>API</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Top Accounts</li>
          <li>Hashtags</li>
          <li>Locations</li>
          <li>Instagram Lite</li>
        </ul>
        <ul>
          <li>Dance</li>
          <li>Food & Drink</li>
          <li>Home & Garden</li>
          <li>Music</li>
          <li>Visual Arts</li>
        </ul>
      </div>
      <div className="loginpage__footer--cw">
        <ul>
          <li>English</li>
          <li>© 2022 Instagram from Meta</li>
        </ul>
      </div>
    </div>
  );
};

export default LoginFooter;

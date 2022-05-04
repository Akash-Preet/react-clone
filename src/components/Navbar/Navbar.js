import React, { Fragment } from "react";
import { Avatar } from "@mui/material";
import insta_logo from "../../assets/logoinsta.png";
import "./Navbar.css";

import homeIcon from "../../assets/home.svg";
import DMIcon from "../../assets/message.svg";
import plusIcon from "../../assets/plus.svg";
import navIcon from "../../assets/find.svg";
import heartIcon from "../../assets/love.svg";
import userIcon from "../../assets/pp1.png";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar__bar-container">
        <div className="navbar__bar-content">
          <div>
            <img
              src={insta_logo}
              alt="instagram logo"
              className="navbar__logo"
            />
          </div>
          <div className="navbar__search-container">
            <input
              className="navbar__search-box"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="navbar__icon-container">
            <img
              className="navbar__icon-container--icon"
              src={homeIcon}
              alt="icon"
            />
            <img
              className="navbar__icon-container--icon"
              src={DMIcon}
              alt="icon"
            />
            <img
              className="navbar__icon-container--icon"
              src={plusIcon}
              alt="icon"
            />
            <img
              className="navbar__icon-container--icon"
              src={navIcon}
              alt="icon"
            />
            <img
              className="navbar__icon-container--icon"
              src={heartIcon}
              alt="icon"
            />
            <Avatar
              className="navbar__icon-container--icon"
              src={userIcon}
              alt="profile"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;

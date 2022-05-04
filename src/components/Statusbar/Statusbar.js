import React, { Fragment, useState } from "react";
import { Avatar } from "@mui/material";
import "./Statusbar.css";
import aaa from "../../assets/pp1.png";

const Statusbar = () => {
  const [statusList] = useState([
    { username: "akash_preet", userImage: "../../assets/pp1.png" },
    {
      username: "chennai_ipl",
      userImage: "../../assets/pp2.png",
    },
    { username: "akash_preet", userImage: "../../assets/pp3.png" },
    {
      username: "chennai_ipl",
      userImage: "../../assets/pp4.png",
    },
    { username: "akash_preet", userImage: "../../assets/pp1.png" },
    {
      username: "chennai_ipl",
      userImage: "../../assets/pp2.png",
    },
    { username: "akash_preet", userImage: "../../assets/pp3.png" },
    {
      username: "chennai_ipl",
      userImage: "../../assets/pp4.png",
    },
    { username: "akash_preet", userImage: "../../assets/pp1.png" },
    {
      username: "chennai_ipl",
      userImage: "../../assets/pp2.png",
    },
    { username: "akash_preet", userImage: "../../assets/pp3.png" },
    {
      username: "chennai_ipl",
      userImage: "../../assets/pp4.png",
    },
  ]);

  return (
    <Fragment>
      <div className="statusbar__container">
        {statusList.map((status, index) => (
          <div className="statusbar__status" key={index}>
            <Avatar className="statusbar__status--img" src={status.userImage} />
            <div className="statusbar__status--text">{status.username}</div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Statusbar;

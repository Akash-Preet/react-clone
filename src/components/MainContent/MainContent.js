import React, { Fragment } from "react";
import Mainpage from "../Mainpage/Mainpage";
import Statusbar from "../Statusbar/Statusbar";
import { Avatar } from "@mui/material";
import "./MainContent.css";

const MainContent = () => {
  return (
    <Fragment>
      <div className="main-content__container">
        <div className="main-content__main">
          <Statusbar></Statusbar>
          <Mainpage></Mainpage>
        </div>
        <div className="main-content__side">
          <div className="sidebar__container">
            <Avatar
              className="sidebar__profilePic"
              alt="Remy Sharp"
              src="https://media-exp1.licdn.com/dms/image/C5603AQHrjQP7ly-wSw/profile-displayphoto-shrink_200_200/0/1644169425495?e=1654128000&v=beta&t=-gap9wBU_za_MN73bDycv6CcBXslalGM6ubUaO2hwZ4"
            />
            <div className="sidebar__info">
              <div>
                <strong>akash_preets</strong>
              </div>
              <div>Akash Preet</div>
            </div>
            <div className="sidebar__info--switch">Switch</div>
          </div>
          {/* <div className="suggestions__title">
            <div>Suggestions for you</div>
            <div>see all</div>
          </div> */}
          <div className="suggestions__container">
            <div className="suggestion__edit">
              <div className="suggestions__info">
                <div>
                  <strong>Suggestions for you</strong>
                </div>
              </div>
              <div
                className="suggestions__info--seeAll"
                style={{ marginLeft: "15px" }}
              >
                See all
              </div>
            </div>
            <div className="suggestion">
              <Avatar
                className="suggestion__profilePic"
                alt="Remy Sharp"
                src="https://media-exp1.licdn.com/dms/image/C5603AQHrjQP7ly-wSw/profile-displayphoto-shrink_200_200/0/1644169425495?e=1654128000&v=beta&t=-gap9wBU_za_MN73bDycv6CcBXslalGM6ubUaO2hwZ4"
              />
              <div className="suggestions__info">
                <div>
                  <strong>akash_preets</strong>
                </div>
                <div>New to Instagram</div>
              </div>
              <div className="suggestions__info--follow">Follow</div>
            </div>
            <div className="suggestion">
              <Avatar
                className="suggestion__profilePic"
                alt="Remy Sharp"
                src="https://media-exp1.licdn.com/dms/image/C5603AQHrjQP7ly-wSw/profile-displayphoto-shrink_200_200/0/1644169425495?e=1654128000&v=beta&t=-gap9wBU_za_MN73bDycv6CcBXslalGM6ubUaO2hwZ4"
              />
              <div className="suggestions__info">
                <div>
                  <strong>akash_preets</strong>
                </div>
                <div>New to Instagram</div>
              </div>
              <div className="suggestions__info--follow">Follow</div>
            </div>{" "}
            <div className="suggestion">
              <Avatar
                className="suggestion__profilePic"
                alt="Remy Sharp"
                src="https://media-exp1.licdn.com/dms/image/C5603AQHrjQP7ly-wSw/profile-displayphoto-shrink_200_200/0/1644169425495?e=1654128000&v=beta&t=-gap9wBU_za_MN73bDycv6CcBXslalGM6ubUaO2hwZ4"
              />
              <div className="suggestions__info">
                <div>
                  <strong>akash_preets</strong>
                </div>
                <div>New to Instagram</div>
              </div>
              <div className="suggestions__info--follow">Follow</div>
            </div>{" "}
            <div className="suggestion">
              <Avatar
                className="suggestion__profilePic"
                alt="Remy Sharp"
                src="https://media-exp1.licdn.com/dms/image/C5603AQHrjQP7ly-wSw/profile-displayphoto-shrink_200_200/0/1644169425495?e=1654128000&v=beta&t=-gap9wBU_za_MN73bDycv6CcBXslalGM6ubUaO2hwZ4"
              />
              <div className="suggestions__info">
                <div>
                  <strong>akash_preets</strong>
                </div>
                <div>New to Instagram</div>
              </div>
              <div className="suggestions__info--follow">Follow</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainContent;

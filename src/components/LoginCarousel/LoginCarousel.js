import React from "react";
import "../LoginPage/LoginPage.css";
import instagram_mobile from "../../assets/instaMobile.png";

const LoginCarousel = () => {
  return (
    <div className="hide-on-xs">
      <img src={instagram_mobile} alt="instagram mobile app" width="454px" />
    </div>
  );
};

export default LoginCarousel;

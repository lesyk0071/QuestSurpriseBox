import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OperaSide from "../../../assets/Photo/OperaSide.jpg";
import ThirdImage from "../../../assets/Photo/ThirdPhoto.png";
import "./ThirdPhoto.css";

const ThirdPhoto = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/fourthPhoto");
  };

  return (
    <div className="main">
      <img src={OperaSide} alt="Opera wall" className="background-img" />
      <div className="third-photo-overlay"></div>
      <img src={ThirdImage} alt="third photo" className="overlay-img" />
      <div>
        <div className="button-container">
          <div className="btn btn-one" onClick={handleClick}>
            <span>Наступна</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPhoto;

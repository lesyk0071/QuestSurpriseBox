import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OperaSide from "../../../assets/Photo/OperaSide.jpg";
import FirstImage from "../../../assets/Photo/FirstPhoto.png";
import "./FirstPhoto.css";

const FirstPhoto = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/secondPhoto");
  };

  return (
    <div className="main">
      <img src={OperaSide} alt="Opera wall" className="background-img" />
      <div className="first-photo-overlay"></div>
      <img src={FirstImage} alt="First photo" className="overlay-img" />
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

export default FirstPhoto;

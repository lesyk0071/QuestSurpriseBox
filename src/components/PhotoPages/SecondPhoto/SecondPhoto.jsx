import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OperaSide from "../../../assets/Photo/OperaSide.jpg";
import SecondImage from "../../../assets/Photo/SecondPhoto.png";
import "./SecondPhoto.css";

const SecondPhoto = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/thirdPhoto");
  };

  return (
    <div className="main">
      <img src={OperaSide} alt="Opera wall" className="background-img" />
      <div className="second-photo-overlay"></div>
      <img src={SecondImage} alt="Second photo" className="overlay-img" />
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

export default SecondPhoto;

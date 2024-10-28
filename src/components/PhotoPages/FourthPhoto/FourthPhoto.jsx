import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OperaSide from "../../../assets/Photo/OperaSide.jpg";
import EmptyImage from "../../../assets/Photo/EmptyPhoto.png";
import "./FourthPhoto.css";

const FourthPhoto = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/fourthPhoto");
  };

  return (
    <div className="main">
      <img src={OperaSide} alt="Opera wall" className="background-img" />
      <div className="fourth-photo-overlay"></div>
      <img src={EmptyImage} alt="fourth photo" className="overlay-img" />
      <div>
        <div className="button-container">
          <div className="btn btn-one">
            <span>Наступна</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthPhoto;

import React, { useRef, useEffect, useState } from "react";
import Operniy from "../../assets/Operniy.mp4";
import { useNavigate } from "react-router-dom";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [showContent, setShowContent] = useState(false); // стан для показу тексту
  const navigate = useNavigate();

  useEffect(() => {
    const video = videoRef.current;

    // Сповільнити відео
    if (video) {
      video.playbackRate = 0.5; // 0.5 означає, що відео програється вдвічі повільніше
    }
  }, []);

  const handleVideoEnd = () => {
    setShowContent(true); // Показати текст після завершення відео
  };

  const handleClick = () => {
    navigate("/prologue");
  };

  return (
    <div className="main">
      <div className="overlay"></div>
      <video
        ref={videoRef}
        src={Operniy}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      />
      <div className="content">
        <div
          className={
            showContent ? "visible-text-first-part" : "hidden-text-first-part"
          }
        >
          <h1>Одного разу у Львiвськiй Оперi</h1>
        </div>
        <div
          className={
            showContent ? "visible-text-second-part" : "hidden-text-second-part"
          }
        >
          <p>Історія про загублену фотографiю</p>
        </div>
        <div className={showContent ? "visible-button" : "hidden-button"}>
          <div className="box-1" onClick={handleClick}>
            <div className="btn btn-one">
              <span>Почати</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

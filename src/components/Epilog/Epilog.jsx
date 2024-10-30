import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import OperaHall from "../../assets/Photo/OperaHall.jpg";
import Voice from "../../assets/Voice.mp4";
import "./Epilog.css";

const Epilog = () => {
  const aText = [
    "Як бачимо, четверте фото дивним чином відсутнє в місці, де ми його чекали.,",
    "Але як так сталося, що те, що мало прикрашати стіни національної опери, просто зникло?,",
    "Та це, насправді, і не так важливо, головне завдання зараз - його знайти.",
    " ",
    "Чи розчарувалась героїня фотографії, побачивши відсутність картини?",
    "Не можна дати чіткої відповіді, але враховуючи",
    "присутність інших трьох, реакція би була подібна наступній:",
    " ",
  ];

  const iSpeed = 10; // Time delay of print out
  const [iIndex, setIIndex] = useState(0); // Start printing array at this position
  const [iTextPos, setITextPos] = useState(0); // Initialise text position
  const [sContents, setSContents] = useState(""); // Initialise contents variable
  const [displayedText, setDisplayedText] = useState(""); // The text being displayed
  const [showButton, setShowButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const navigate = useNavigate();
  const videoRef = useRef(null);
  useEffect(() => {
    const typewriter = () => {
      if (iIndex < aText.length) {
        let newContents = sContents; // Copy the current contents
        let currentText = aText[iIndex]; // The current line

        // Build the displayed text
        setDisplayedText(
          newContents + currentText.substring(0, iTextPos) + "_"
        );

        if (iTextPos === currentText.length) {
          // If the entire line has been typed, move to the next line
          setITextPos(0);
          setSContents(newContents + currentText + "<br />"); // Add the current line to contents
          setIIndex(iIndex + 1);
          console.log("Line typed");
        } else {
          // Continue typing the current line
          setITextPos(iTextPos + 1);
        }
      }
    };

    if (iIndex < aText.length) {
      // Set a timeout to simulate typing
      const timeout = setTimeout(typewriter, iSpeed);
      return () => clearTimeout(timeout); // Clean up timeout to avoid memory leaks
    } else {
      setShowButton(true);
    }
  }, [iTextPos, iIndex, aText, sContents, iSpeed]);

  const handleClick = () => {
    navigate("/final");
  };

  const startVideo = () => {
    if (showButton && videoRef.current) {
      videoRef.current.play();
    }
  };

  const videoEnd = () => {
    setShowNextButton(true);
  };
  return (
    <div className="main">
      <img src={OperaHall} alt="Opera Hall" />
      <div className="epilog-overlay"></div>
      <div className="epilog-content">
        <div
          id="typedtext"
          dangerouslySetInnerHTML={{ __html: displayedText }}
        />
        <div className={showButton ? "visible-button" : "hidden-button"}>
          <div className="start-video-button">
            <div className="btn btn-one" onClick={startVideo}>
              <span>Послухати</span>
            </div>
          </div>
        </div>
        <div className={showButton ? "visible-button" : "hidden-button"}>
          <div className="epilog-video">
            <video
              ref={videoRef}
              src={Voice}
              muted={false}
              playsInline
              onEnded={videoEnd}
            />
          </div>
        </div>
      </div>
      <div>
        <div className={showNextButton ? "visible-button" : "hidden-button"}>
          <div className="button-container">
            <div className="btn btn-one" onClick={handleClick}>
              <span>Далі</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Epilog;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OperaHall from "../../assets/Photo/OperaHall.jpg";
import "./Prologue.css";

const Prologue = () => {
  const aText = [
    "Одного тихого, але холодного вечора вівторка,",
    "У самому центрі старого міста Лева,",
    "Національна опера приймала поціновувачів оркестральної музики.",
    " ",
    "Ох, скільки людей бачили ці стіни",
    "Але зі всіх прийдешніх, особливо виділялась одна молода дівчина",
    " ",
    "Глянувши на неї, можна було сказати, що саме її красою",
    "Надихались архітектори, проектуючи Львівську національну оперу,",
    "Настільки добре вона вписувалась в атмосферу і велич головного залу",
    " ",
    "Якщо всі гості фотографували красу стін опери, то, без перебільшення,",
    "Здавалося, що стіни самі фотографували її.",
    " ",
    "І так, позуючи перед фотокамерою, на світ, як подарунок богів Олімпу,",
    "З'явився набір, досі не баченої оперним театром краси, фото.",
  ];

  const iSpeed = 10; // Time delay of print out
  const [iIndex, setIIndex] = useState(0); // Start printing array at this position
  const [iTextPos, setITextPos] = useState(0); // Initialise text position
  const [sContents, setSContents] = useState(""); // Initialise contents variable
  const [displayedText, setDisplayedText] = useState(""); // The text being displayed
  const [showButton, setShowButton] = useState(false);

  const navigate = useNavigate();
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
    navigate("/firstPhoto");
  };

  return (
    <div className="main">
      <img src={OperaHall} alt="Opera Hall" />
      <div className="prologue-overlay"></div>
      <div className="prologue-content">
        <div
          id="typedtext"
          dangerouslySetInnerHTML={{ __html: displayedText }}
        />
      </div>
      <div>
        <div className={showButton ? "visible-button" : "hidden-button"}>
          <div className="button-container">
            <div className="btn btn-one" onClick={handleClick}>
              <span>Доторкнутись до прекрасного</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prologue;

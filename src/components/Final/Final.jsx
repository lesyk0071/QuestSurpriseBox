import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import OperaHall from "../../assets/Photo/OperaHall.jpg";
import "./Final.css";

const Final = () => {
  const aText = [
    "Здавалося б, після таких слів можна би було відмовитись від ідеї пошуку цієї фотографії.",
    "Але це тільки здавалося.,",
    "Після дового розслідування виявилось, що дане фото було викрадене невідомим чоловіком",
    " ",
    "З оповідей людей, які бачили його з тією самою фотографією в руках,",
    "Кожен сказав, що воно було неймовірної краси.",
    "Можливо саме тому, що всі звертали уваги на фото, а не на чоловіка, який його викрав,",
    "Ніхто і не міг чітко пояснити, як цей чоловік виглядав",
    " ",
    "Тому надіємось, що одного дня доля подарує нам шанс ще раз побачити фотографію,",
    "яка мала прикрашати стіни Львівської національної опери.",
    " ",
    " ",
    "P.S. Можеш відкривати)",
    "І ні, я не заморочився, просто для тебе хочеться робити шось цікаве)",
  ];

  const iSpeed = 10; // Time delay of print out
  const [iIndex, setIIndex] = useState(0); // Start printing array at this position
  const [iTextPos, setITextPos] = useState(0); // Initialise text position
  const [sContents, setSContents] = useState(""); // Initialise contents variable
  const [displayedText, setDisplayedText] = useState(""); // The text being displayed

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

  return (
    <div className="main">
      <img src={OperaHall} alt="Opera Hall" />
      <div className="epilog-overlay"></div>
      <div className="epilog-content">
        <div
          id="typedtext"
          dangerouslySetInnerHTML={{ __html: displayedText }}
        />
      </div>
    </div>
  );
};

export default Final;

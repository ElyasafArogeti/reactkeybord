import React, { useState } from "react";
import "./Keyboard.css";
import Display from "./Display";
import './Display.css';
import Size from "./Size.jsx";

const hebrewKeys = [
  ["ק", "ר", "א", "ט", "ו", "ן", "ם", "פ"],
  ["ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף"],
  ["ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", "ץ"],
  ["  ", "שפה"],
];

const Keyboard = ({text ,setText}) => {

  const select = (key) => {
    setText(text + key);
  };

  return (
    <div className="keyboard">
      {hebrewKeys.map((row, rowIndex) => (
        <div className="keyboard-row" key={rowIndex}>
          {row.map((key, keyIndex) => (
            <div className="key" key={keyIndex} onClick={() => select(key)}>
              {key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const MyKey = () => {
  const [text , setText] = useState("");

  return (
    <div className="DisplayView">
      <Display text={text} />
      <h1>מקלדת עברית</h1>
      <Keyboard  text = {text} setText = {setText}/> 
     <Size/>        
    </div>
  );
};

export default MyKey;

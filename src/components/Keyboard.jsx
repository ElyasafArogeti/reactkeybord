import React, { useState } from "react";
import "./Keyboard.css";
import Display from "./Display";

const hebrewKeys = [
  ["ק", "ר", "א", "ט", "ו", "ן", "ם", "פ"],
  ["ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף"],
  ["ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", "ץ"],
  ["רווח", "שפה"],
];
const select = (key) => {
  console.log(key);
};

const Keyboard = (key) => {
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
  const [text, setText] = useState("");
  function updata(key) {
    // setText((prevText) => prevText + key);
  }
  return (
    <>
      <p>{text}</p>
      <h1>מקלדת עברית</h1>
      <Display />
      <Keyboard />
    </>
  );
};

export default MyKey;

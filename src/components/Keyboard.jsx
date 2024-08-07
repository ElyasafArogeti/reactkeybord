import React, { useState } from "react";
import "./Keyboard.css";
import Display from "./Display";
import './Display.css';
import Size from "./Size.jsx";

const hebrewKeys = [
  ["ק", "ר", "א", "ט", "ו", "ן", "ם", "פ"],
  ["ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף"],
  ["ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", "ץ"],
  ["_", "שפה","↩"],
];

const Keyboard = ({text ,setText, arr, setArr }) => {
  
  const select = (key) => {
    if (key === "↩") {
      const newArr = arr.slice(0, -1);
      setArr(newArr);
      setText(newArr.join(""));
    } else {
      const newArr = [...arr, key];
      setArr(newArr);
      setText(newArr.join(""));
    }
  };
 
  return (
    <div className="keyboard">
      { hebrewKeys.map((row, rowIndex) =>(
        <div className="keyboard-row" key={rowIndex}>
          {row.map((key, keyIndex) => (
            <div className="key" key={keyIndex} onClick={() => select(key)}> 
              {key}
            </div>
          ))}
        </div>
      )) }
    </div>
  );
};

const MyKey = () => {
  const [text , setText] = useState("");
  const [arr, setArr] = useState([]);
  return (
    <div className="DisplayView">
      <Display text={text} />
      <h1>מקלדת עברית</h1>
      <Keyboard  text = {text} setText = {setText} arr={arr} setArr={setArr}/> 
      <Size/>

    </div>
  );
};

export default MyKey;

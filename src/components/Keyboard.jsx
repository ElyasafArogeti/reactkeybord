import React, { useState } from "react";
import "./Keyboard.css";
import Display from "./Display";
import "./Display.css";
import Size from "./Size.jsx";
import ColorText from "./ColorText.jsx";

const hebrewKeys = [
  ["1","2","3","4","5","6","7","8","9"],
  ["ק", "ר", "א", "ט", "ו", "ן", "ם", "פ"],
  ["ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף"],
  ["ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", "ץ"],
  ["_","😀", "🌐", "↩", "Delete", "Ctrl Z"],
];
const englishKeys = [
  ["1","2","3","4","5","6","7","8","9"],
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
  ["🔽","🔼","_","😀", "🌐", "↩", "Delete", "Ctrl Z"],
];
const emojiKey = [
  ["😀", "😂", "😍", "🥺", "😭", "😊", "😒", "👍", "👎"],
  ["🎉", "💯", "🔥", "✨", "🚀", "🎈", "❤️", "💔", "🎁"],
  ["⬅️", "➡️", "⬆️", "⬇️", "✔️", "❌", "🔔", "🔕"],
  ["_","⌨", "🌐", "↩", "Delete", "Ctrl Z" ],
];

const Keyboard = ({setText, arr, setArr,setBoard,board,emojiKeys}) => {
  let arrUndo = [...arr];

  const select = (key) => {
    if(key==="🔽"){
      const join=arrUndo.join("");
      setArr(join.toLowerCase())
      setText(join.toLowerCase())
    }
    else if(key==="🔼"){
      const join=arrUndo.join("");
      setArr(join.toUpperCase())
      setText(join.toUpperCase())
    }
   else if(key==="⌨"){
      if(board === emojiKeys) setBoard(hebrewKeys);
    }
    else if(key==="😀"){
      if(board === englishKeys||board === hebrewKeys) setBoard(emojiKeys) ;
      else setBoard(hebrewKeys);
    }
    else if(key==="🌐"){
      if(board === englishKeys) setBoard(hebrewKeys) ;
      else setBoard(englishKeys);
    }
     else if (key === "Ctrl Z") {
      setArr(arr.slice(0, -1));
      setText(arrUndo.join(""));

    } else if (key === "Delete") {
      arrUndo.push("");
      setArr(arrUndo);
      setText("");

    } else if (key === "↩") {
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
      {board.map((row, rowIndex) => (
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
  const [arr, setArr] = useState([]);
  const [fontSize, setFontSize] = useState(16);
  const [color, setColor] = useState("black");
  const [board, setBoard] = useState(hebrewKeys);
  const [emojiKeys, setEmojiKeys] = useState(emojiKey);

  return (
    <div className="DisplayView">
      <Display text={text} fontSize={fontSize} color={color}/>
      <h1>מקלדת {board===hebrewKeys ? "עברית" : "אנגלית"}</h1>
      <Keyboard text={text} setText={setText} arr={arr} setArr={setArr} board={board} setBoard={setBoard} emojiKeys={emojiKeys}/>
      <Size fontSize={fontSize} setFontSize={setFontSize} />
      <ColorText setColor={setColor}/>
    </div>
  );
};

export default MyKey;

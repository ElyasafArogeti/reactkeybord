
import React, { useState } from 'react';
import './Keyboard.css'; 
const hebrewKeys = [
  ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'],
  ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף'],
  ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ'],
  ['רווח']
];

const Keyboard = (props) => {
  return (
    <div className="keyboard">
      {hebrewKeys.map((row, rowIndex) => (

        <div className="keyboard-row" key={rowIndex}>
        
          {row.map((key, keyIndex) => (
            
            <div className="key" key={keyIndex} onClick={()=>props(key)} >  
             
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const MyKey =()=>{
const[text,setText]=useState("");
function updata (key) {
    setText((prevText) => prevText + key);
    
}
return(
    <>
     <p>{text}</p>
    <h1>מקלדת עברית</h1>
    <Keyboard />
    </>
)


}

export default MyKey;

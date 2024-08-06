import React from 'react';
import './Keyboard.css'; 

const hebrewKeys = [
  ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'],
  ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף'],
  ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ'],
  ['רווח']
];

const Keyboard = () => {
  return (
    <div className="keyboard">
      {hebrewKeys.map((row, rowIndex) => (

        <div className="keyboard-row" key={rowIndex}>
        
          {row.map((key, keyIndex) => (
            
            <div className="key" key={keyIndex}>  
              {key === 'רווח' ? <div className="space-key">{key}</div> : key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;

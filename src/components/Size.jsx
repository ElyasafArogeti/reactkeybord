import React from "react";
import './Size.css';

const Size = (props) => {
  return (
    <div className='size'>
      <button className='size-button' onClick={() => props.setFontSize(props.fontSize + 6)}>+</button>
      <p className='font-size-display'>{props.fontSize}</p>
      <button className='size-button' onClick={() => props.setFontSize(props.fontSize - 6)}>-</button>
    </div>
  );
}

export default Size;
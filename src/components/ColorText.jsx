import React from 'react';
import './ColorText.css';

const ColorText = (props) => {
  return (
    <div className="color-container">
      <h2>Color</h2>
      <button className="color-button red" onClick={(e) => props.setColor(e.target.textContent)}>red</button>
      <button className="color-button blue" onClick={(e) => props.setColor(e.target.textContent)}>blue</button>
      <button className="color-button yellow" onClick={(e) => props.setColor(e.target.textContent)}>yellow</button>
      <button className="color-button black" onClick={(e) => props.setColor(e.target.textContent)}>black</button>
    </div>
  );
}

export default ColorText;

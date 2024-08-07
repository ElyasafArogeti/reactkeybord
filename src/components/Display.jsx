import React from 'react';
import './Display.css';

const Display = (props) => {
  return (
    <>
      <p className='text' style={{ fontSize: props.fontSize, color: props.color }}>{props.text}</p>
    </>
  );
}

export default Display;
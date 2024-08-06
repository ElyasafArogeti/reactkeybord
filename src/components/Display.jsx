import React from 'react';
import './Display.css';

const Display = (props) => {
  return (
    <p className='text'>{props.text}</p>
  )
}

export default Display;
import React from 'react';

const Square = ({ handleClick, value }) => {
  
  // Notice haw the number of the square is passed into the function
  // so that we know which square was clicked
  // console.log('value: ', value)
  return (
    <button className="square"
      onClick = { handleClick }>
      { value }
    </button>
  );
}

export default Square;

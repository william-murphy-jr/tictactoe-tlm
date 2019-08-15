import React from 'react';

const Square = ({ handleClick, value }) => {
  
  // console.log('props.value: ', props.value)÷
  return (
    <button className="square"
      onClick = { handleClick }>
      { value }
    </button>
  );
}

export default Square;
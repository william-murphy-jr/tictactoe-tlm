import React from 'react';

const Square = (props) => {
  console.log('props.value: ', props.value)
      return (
        <button className="square">
          { props.value }
        </button>
      );
    }

  export default Square;
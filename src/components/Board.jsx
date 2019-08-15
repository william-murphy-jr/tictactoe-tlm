import React from 'react';
import Square from './Square';

const Board = ({ squares, handleClick }) => {
  // This function helps clean the boards Square code up
  const renderSquare = (i) => {
    return <Square
      value = { squares[i] }
      handleClick = { () => { handleClick(i) } }
    />;
  }
  
  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;

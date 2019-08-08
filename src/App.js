import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Board from './components/Board';

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <h1 className="game-title">Tic Tac Toe</h1>
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;

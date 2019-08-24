import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import Button from './components/Button';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      }
      this.handleClick = this.handleClick.bind(this);
      this.resetGame = this.resetGame.bind(this);
    }
  
  // This function returns "X", "O" or null if there is no winner
  calculateWinner(squares) {
    // All game winning combinations
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winCombos.length; i++) {
      const [a, b, c] = winCombos[i];

      // We can not just use:  squares[a] === squares[b] && squares[a] === squares[c]
      // What would happen if all values are null so we would have
      // null === null && null === null => which evaluate to true and the game clearly has 
      // not been won at this point.
      // So the "squares[a] &&" at the beginning of the expression
      // will short-circuit the rest of the evaluation since null is a false value.
      // We would have:
      // null   && null === null && null === null
      // false  &&      true     &&      true 
      // which is false;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  // When key is clicked you will want to do something
  handleClick(i) {
    const squares = this.state.squares.slice();
    // This if statement prevents any action if the squares
    //  already has been checked or there is already a winner
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    /** Fill Me In */
  }

  // When the game is over you will want to reset the game.
  resetGame(e) {
    e.preventDefault();
    /*  Fill Me In */
  }

  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    
    // You will need to have status return the appropriate string
    // To indicate which player's turn it is.
    status = 'Next player: ' + 'X' ;

    return (
      <div className="game">
        <div className="game-board">
          <h1 className="game-title">Tic Tac Toe</h1>
          <Board
            squares={this.state.squares}
            handleClick={(i) => this.handleClick(i)}
          />
          <div className="game-info">
            <span className="game-info-text">{status}</span>
            <ol>{/* Advanced Section for Game History */}</ol>
          </div>
          <Button onClick={ this.resetGame }
            className={'reset-game'}
          />
        </div>
      </div>
    );
  }
}

export default Game;

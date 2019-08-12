import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Board from './components/Board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      }
  }
  

  calculateWinner(squares) {
    // console.log('calculateWinner');
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

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const winner = this.calculateWinner(this.state.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
        <h1 className="game-title">Tic Tac Toe</h1>
          <Board
            squares={this.state.squares}
            handleClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;

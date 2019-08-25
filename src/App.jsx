import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import Button from './components/Button';
// import { descriptions } from 'jest-config';


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      moveCount: 0,
      stepNumber: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
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
      // --wmj
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext,
      moveCount: this.state.moveCount + 1,
      stepNumber: history.length,
    }, () => console.log(this.state.moveCount));
  }

  resetGame(e) {
    e.preventDefault();
    this.setState({
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0,
      moveCount: 0,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else if (current.squares.every(square => square)) {
      status = 'Tie game';
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    const moves = history.map((step, move) => {    
      const description = move ? `Go to move # ${move}` : `Go to game start`;
      return (
        <li key={ move }>
          <button className="btn-history" onClick={ () => this.jumpTo(move) }>{ description }</button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <h1 className="game-title">Tic Tac Toe <span style={{ fontWeight: 'lighter'}}>(Advanced)</span></h1>
          <Board
            squares={current.squares}
            handleClick={(i) => this.handleClick(i)}
          />
          <div className="game-info">
            <span className="game-info-text">{status}</span>            
          </div>
          <Button onClick={ this.resetGame }
            className={'reset-game'}
          />
        </div>
        <div className="game-info">
          <ol className="history">{ moves }</ol>
        </div>
      </div>
    );
  }
}

export default Game;

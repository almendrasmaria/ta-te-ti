import { useState } from 'react';
import './App.css'

function App() {
  const [board, setBoard] = useState (Array(9).fill(null));
  const [turn, setTurn] = useState("X");

  const updateBoard = (index) => {

    if (board[index] || checkWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard (newBoard);

    const newTurn = turn === "X" ? "O" : "X"
    setTurn (newTurn)
  }

  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  return (
  
    <main className='game'>
      <h1 className='tateti-title'>TaTeTi</h1>
      <section className='board'>
        {
          board.map ((value, index) => (
            <div 
              key={index}
              className='cells'
              onClick={() => updateBoard(index)} 
            >
              {value}
            </div>
          ))
        }
      </section>
    </main>
  

  )
}

export default App

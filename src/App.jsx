import { useState } from 'react';
import './App.css'

function App() {
  const [board, setBoard] = useState (Array(9).fill(null));
  const [turn, setTurn] = useState("X");

  const updateBoard = (index) => {

    if (board[index] === "X" || board[index] === "O") {
    return;
    }

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard (newBoard);

    const newTurn = turn === "X" ? "O" : "X"
    setTurn (newTurn)
  }

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

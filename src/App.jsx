import { useState, useEffect } from 'react';
import './App.css'

const winCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8], 
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

const checkWinner = (board) => {
  for (let combo of winCombos) {
    const [pos1,pos2,pos3] = combo; 
    if (
      board[pos1] && board[pos1] === board [pos2] && board [pos1] === board [pos3]
    ) {
      return board [pos1]
    }
  }
  return null;
};

function App() {
  const [board, setBoard] = useState (Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState (null); 

  useEffect(() => {
    const result = checkWinner (board) ; 
    if (result) {
      setWinner(result)
    }
  }, [board]); 

  const updateBoard = (index) => {

    if (winner || board[index]) return;

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
      
    <button className='reset-button' onClick={() => {
      setBoard(Array(9).fill(null));
      setWinner(null);
      setTurn("X");
    }}>
      Reiniciar juego
    </button>
    </main>
  

  )
}

export default App

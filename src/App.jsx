import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { checkWinner } from './checkWinner';
import './App.css'

function App() {
  const [board, setBoard] = useState (Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState (null); 

  useEffect(() => {
    const result = checkWinner (board) ; 
    if (result) {
      setWinner(result)
      alert(`El ganador es ${result}!`);
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
      <FontAwesomeIcon icon={faRepeat} />
    </button>
    </main>
  

  )
}

export default App

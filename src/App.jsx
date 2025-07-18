import { useState } from 'react';
import './App.css'


function App() {
  const [board, setBoard] = useState (Array(9).fill(null));

  return (
  
    <main className='game'>
      <h1>Tic Tac Toe</h1>
      <section className='board'>
        {
          board.map ((value, index) => (
            <div key={index} className='cells'>
              {value}
            </div>
          ))
        }
      </section>
    </main>
  

  )
}

export default App

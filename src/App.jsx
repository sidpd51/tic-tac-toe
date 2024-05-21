import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Square from './components/Square'
import './App.css'

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0]="X";
    setSquares(nextSquares)
  }

  return (
    <>
      <div className='board-row'>
      <Square value={squares[0]} onSquareClick={handleClick(0)}></Square>
      <Square value={squares[1]} onSquareClick={handleClick(1)}></Square>
      <Square value={squares[2]} onSquareClick={handleClick(2)}></Square>
      </div>
      <div className='board-row'>
      <Square value={squares[4]} onSquareClick={handleClick}></Square>
      <Square value={squares[5]} onSquareClick={handleClick}></Square>
      <Square value={squares[6]} onSquareClick={handleClick}></Square>
      </div>
      <div className='board-row'>
      <Square value={squares[7]} onSquareClick={handleClick}></Square>
      <Square value={squares[8]} onSquareClick={handleClick}></Square>
      <Square value={squares[9]} onSquareClick={handleClick}></Square>
      </div>
    </>
  )
}

export default App

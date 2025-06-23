import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { X, Circle } from 'lucide-react'

export const Route = createFileRoute('/tic-tac-toe')({
  component: RouteComponent,
})

type GridValue = 'x' | 'o' | null
const emptyBoard: GridValue[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function RouteComponent() {
  const [currentPlayer, setCurrentPlayer] = useState<Boolean>(true)
  const [board, setBoard] = useState<GridValue[][]>(emptyBoard)
  const [winner, setWinner] = useState<'x' | 'o' | 'tie' | null>(null)

  useEffect(() => {
    checkWinner()
  }, [board])

  function placeCounter(grid: Array<number>) {
    if (board[grid[0]][grid[1]] !== null) {
      return
    }

    setBoard((prevBoard) => {
      const newBoard: GridValue[][] = [...prevBoard].map(row => [...row])
      if (currentPlayer) {
        newBoard[grid[0]][grid[1]] = 'x'
        return newBoard
      } else {
        newBoard[grid[0]][grid[1]] = 'o'
        return newBoard
      }
    })
    setCurrentPlayer(!currentPlayer)
  }

  function checkWinner() {
    for (let i =0; i < 3; i++) {
      const row = board[i]
      if (
        row[0] === row[1] &&
        row[1] === row[2] &&
        row[0] !== null
      ) {
        setWinner(row[0])
      }
    }

    for (let i = 0; i < 3; i++) {
      const col = board.map(row => row[i])
      if (
        col[0] === col[1] &&
        col[1] === col[2] &&
        col[0] !== null
      ) {
        setWinner(col[0])
      }
    }

    if (
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2] &&
      board[0][0] !== null
    ) {
      setWinner(board[0][0])
    } else if (
      board[0][2] === board[1][1] &&
      board[1][1] === board [2][0] &&
      board[0][2] !== null
    ) {
      setWinner(board[0][2])
    }

    if (board.every(row => row.every(cell => cell !== null))) {
      setWinner('tie')
    }
  }

  function resetGame() {
    setCurrentPlayer(true)
    setBoard(emptyBoard)
    setWinner(null)
  }

  return (
    <div className='flex flex-col gap-4 items-center justify-center h-screen'>
      <div className=''>
        {winner && (
          <div className='flex flex-col items-center justify-center gap-2'>
            <div className='flex gap-1 items-center justify-center text-2xl font-bold'>
              {winner === 'x' && (
                <>
                  <X />
                  is the winner!
                </>
              )}
              {winner === 'o' && (
                <>
                  <Circle />
                  is the winner!
                </>
              )}
              {winner === 'tie' && (
                <>
                  It's a tie!
                </>
              )}
            </div>
            <button onClick={resetGame} className='text-sm px-4 py-2 text-black bg-white rounded-md'>
              Play Again
            </button>
          </div>
        )}
      </div>
      <div className='flex flex-col size-96 bg-gray-500 rounded-md gap-2 p-2'>
        {board.map((row, rowIndex) => (
          <div className='flex w-full h-1/3 gap-2'>         
            {row.map((cell, colIndex) => {
              return (
                <button
                  disabled={cell !== null}
                  onClick={()=> {
                    placeCounter([rowIndex, colIndex])
                  }}
                  className='flex items-center justify-center bg-white rounded-md w-1/3 h-full'
                >
                  {board[rowIndex][colIndex] === 'x' && (
                    <X className='flex size-24 text-black' />
                  )}
                  {board[rowIndex][colIndex] === 'o' && (
                    <Circle className='flex size-24 text-black' />
                  )}
                </button>
              )
            })}
          </div>
        ))
        }
        
      </div>
    </div>

    
  )
}
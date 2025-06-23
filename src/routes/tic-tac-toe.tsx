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
  const [winner, setWinner] = useState<'x' | 'o' | null>(null)

  useEffect(() => {
    checkWinner()
  }, [board])

  function placeCounter(grid: Array<number>) {
    if (board[grid[0]][grid[1]] !== null) {
      return
    }

    let newBoard = board.map(row => [...row])
    if (currentPlayer) {
      newBoard[grid[0]][grid[1]] = 'x'
    } else {
      newBoard[grid[0]][grid[1]] = 'o'
    }
    setBoard(newBoard)
    setCurrentPlayer(!currentPlayer)
  }

  function checkWinner() {
    if (
      board[0][0] === board[0][1] &&
      board[0][1] === board[0][2]
    ) {
      setWinner(board[0][0])
    } else if (
      board[1][0] === board[1][1] &&
      board[1][1] === board[1][2]
    ) {
      setWinner(board[1][0])
    } else if (
      board[2][0] === board[2][1] &&
      board[2][1] === board[2][2]
    ) {
      setWinner(board[2][0])
    } else if (
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]
    ) {
      setWinner(board[0][0])
    } else if (
      board[0][2] === board[1][1] &&
      board[1][1] === board [2][0]
    ) {
      setWinner(board[0][2])
    } else if (
      board[0][0] === board[1][0] &&
      board[1][0] === board[2][0]
    ) {
      setWinner(board[0][0])
    } else if (
      board[0][1] === board[1][1] &&
      board[1][1] === board[2][1]
    ) {
      setWinner(board[0][1])
    } else if (
      board[0][2] === board[1][2] &&
      board[1][2] === board[2][2]
    ) {
      setWinner(board[0][2])
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
                <X />
              )}
              {winner === 'o' && (
                <Circle />
              )}
              is the winner!
            </div>
            <button onClick={resetGame} className='text-sm px-4 py-2 text-black bg-white rounded-md'>
              Play Again
            </button>
          </div>
        )}
      </div>
      <div className='flex flex-col size-96 bg-gray-500 rounded-md gap-2 p-2'>
        {[0, 1, 2].map(i => (
          <div className='flex w-full h-1/3 gap-2'>         
            {[0, 1, 2].map(j => {
              return (
                <button
                  onClick={()=> {
                    placeCounter([i, j])
                  }}
                  className='flex items-center justify-center bg-white rounded-md w-1/3 h-full'
                >
                  {board[i][j] === 'x' && (
                    <X className='flex size-24 text-black' />
                  )}
                  {board[i][j] === 'o' && (
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
import { createFileRoute } from '@tanstack/react-router'
import { setgid } from 'process'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/rock-paper-scissors')({
  component: RouteComponent,
})

function RouteComponent() {
  const [userChoice, setUserChoice] = useState<string | null>(null)
  const [computerChoice, setComputerChoice] = useState<string | null>(null)
  const [gameState, setGameState] = useState<string>('playing')

  useEffect(() => {
    determineWinner()
  }, [userChoice, computerChoice])

  function chooseRandom() {
    const choices = ['rock', 'paper', 'scissors']
    setComputerChoice(choices[Math.floor(Math.random() * 3)])
  }

  function chooseRock() {
    setUserChoice('rock')
    chooseRandom()
  }

  function choosePaper() {
    setUserChoice('paper')
    chooseRandom()
  }

  function chooseScissors() {
    setUserChoice('scissors')
    chooseRandom()
  }

  function determineWinner() {
    if (!userChoice || !computerChoice) {
      setGameState('playing')
    } else if (userChoice === computerChoice) {
      setGameState('tie')
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
      setGameState('win')
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
      setGameState('win')
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
      setGameState('win')
    } else {
      setGameState('lose')
    }
  }

  function displayResult() {
    if (gameState === 'tie') {
      return <div>It's a tie!</div>
    } else if (gameState === 'win') {
      return <div>You won! You chose {userChoice}, CPU chose {computerChoice}</div>
    } else if (gameState === 'lose') {
      return <div>You lose! You chose {userChoice}, CPU chose {computerChoice}</div>
    }
  }

  function resetGame() {
    setUserChoice(null)
    setComputerChoice(null)
    setGameState('playing')
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-5'>
      {gameState === 'playing' ? (
          <>
            <p className='text-2xl font-bold'>Pick your weapon</p>
              <div className='flex items-center justify-center gap-3'>
                  <button onClick={chooseRock} className='w-44 h-80 border-2 border-white rounded-md bg-[#120d33]'>Rock</button>
                  <button onClick={choosePaper} className='w-44 h-80 border-2 border-white rounded-md bg-[#120d33]'>Paper</button>
                  <button onClick={chooseScissors} className='w-44 h-80 border-2 border-white rounded-md bg-[#120d33]'>Scissors</button>
              </div>
            
          </>
        ) : (
          <>
            {displayResult()}
            <button onClick={resetGame} className='text-black bg-white rounded-md px-4 py-2'>Play Again</button>
          </>
        )  
      }
    </div>

)
}

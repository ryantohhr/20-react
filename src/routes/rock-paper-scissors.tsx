import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { BrickWall, ScrollText, Scissors, Trophy, Trash2, Equal } from 'lucide-react'

export const Route = createFileRoute('/rock-paper-scissors')({
  component: RouteComponent,
})

type Weapon = 'rock' | 'paper' | 'scissors'
const weapons = ['rock', 'paper', 'scissors'] as const

function RouteComponent() {
  const [userChoice, setUserChoice] = useState<Weapon | null>(null)
  const [computerChoice, setComputerChoice] = useState<Weapon | null>(null)
  const [gameState, setGameState] = useState<'playing' | 'done'>('playing')

  function handleUserChoice(weapon: Weapon) {
    setUserChoice(weapon)
    setComputerChoice(weapons[Math.floor(Math.random() * weapons.length)])
    setGameState('done')
  }

  function displayResult() {
    let result
    if (!userChoice || !computerChoice) {
      setGameState('playing')
    } else if (userChoice === computerChoice) {
      result = <div className='flex flex-col items-center justify-center gap-2 text-2xl font-bold'>It's a tie! <Equal className='w-10 h-10' /></div>
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = <div className='flex flex-col items-center justify-center gap-2 text-center text-2xl font-bold'>You won! <br /> You chose {userChoice}, CPU chose {computerChoice} <Trophy className='w-10 h-10' /></div>
    } else {
      result = <div className='flex flex-col items-center justify-center gap-2 text-center text-2xl font-bold'>You lose! <br /> You chose {userChoice}, CPU chose {computerChoice} <Trash2 className='w-10 h-10' /></div>
    }

    return result
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
                  <button onClick={() => {
                    handleUserChoice('rock')
                  }}
                  className='w-44 h-80 flex flex-col items-center justify-center gap-2 border-2 border-white rounded-md bg-[#120d33]'><BrickWall className='w-10 h-10' />ROCK</button>
                  <button onClick={() => {
                    handleUserChoice('paper')
                  }}
                  className='w-44 h-80 flex flex-col items-center justify-center gap-2 border-2 border-white rounded-md bg-[#120d33]'><ScrollText className='w-10 h-10' />PAPER</button>
                  <button onClick={() => {
                    handleUserChoice('scissors')
                  }}
                  className='w-44 h-80 flex flex-col items-center justify-center gap-2 border-2 border-white rounded-md bg-[#120d33]'><Scissors className='w-10 h-10'/>SCISSORS</button>
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

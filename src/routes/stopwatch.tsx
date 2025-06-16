import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/stopwatch')({
  component: RouteComponent,
})

function RouteComponent() {
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0)
  const [stopwatchState, setStopwatchState] = useState<'start' | 'running' | 'stopped'>('start')

  return (
    <div className='flex items-center justify-center h-screen'>
      {stopwatchState === 'start' && (
        <div className='w-72 h-56 flex flex-col items-center justify-evenly border border-white rounded-md'>
          {secondsElapsed} seconds elapsed
          <button className='px-4 py-2 bg-green-500 text-white rounded-md'>
            Start
          </button>
        </div>
      )}
      {stopwatchState === 'running' && (
        <div className='w-72 h-56 flex flex-col items-center justify-evenly border border-white rounded-md'>
          {secondsElapsed} seconds elapsed
          <button className='px-4 py-2 bg-gray-500 text-white rounded-md'>
            Pause
          </button>
      </div>
      )}
      {stopwatchState === 'stopped' && (
        <div className='w-72 h-56 flex flex-col items-center justify-evenly border border-white rounded-md'>
          {secondsElapsed} seconds elapsed
          <div className='flex items-center justify-center gap-4'>
            <button className='px-4 py-2 bg-gray-500 text-white rounded-md'>
              Resume
            </button>
            <button className='px-4 py-2 bg-red-500 text-white rounded-md'>
              Reset
            </button>
          </div>
      </div>
      )}
    </div>
  )
}
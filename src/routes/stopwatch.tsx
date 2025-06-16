import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/stopwatch')({
  component: RouteComponent,
})

function RouteComponent() {
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0)
  const [stopwatchState, setStopwatchState] = useState<'start' | 'running' | 'stopped'>('start')
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>(undefined)

  function intervalCallback(): void {
    setSecondsElapsed((prev) => prev + 1)
  }

  function timeControl() {
    if (stopwatchState === 'start' || stopwatchState === 'stopped') {
      setIntervalId(setInterval(intervalCallback, 1000))
      setStopwatchState('running')
    } else if (stopwatchState === 'running') {
      clearInterval(intervalId)
      setStopwatchState('stopped')
    }
  }

  function resetTime() {
    setSecondsElapsed(0)
    setStopwatchState('start')
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      {stopwatchState === 'start' && (
        <div className='w-72 h-56 flex flex-col items-center justify-evenly border border-white rounded-md'>
          {secondsElapsed} seconds elapsed
          <button onClick={timeControl} className='px-4 py-2 bg-green-500 text-white rounded-md'>
            Start
          </button>
        </div>
      )}
      {stopwatchState === 'running' && (
        <div className='w-72 h-56 flex flex-col items-center justify-evenly border border-white rounded-md'>
          {secondsElapsed} seconds elapsed
          <button onClick={timeControl} className='px-4 py-2 bg-gray-500 text-white rounded-md'>
            Pause
          </button>
      </div>
      )}
      {stopwatchState === 'stopped' && (
        <div className='w-72 h-56 flex flex-col items-center justify-evenly border border-white rounded-md'>
          {secondsElapsed} seconds elapsed
          <div className='flex items-center justify-center gap-4'>
            <button onClick={timeControl} className='px-4 py-2 bg-gray-500 text-white rounded-md'>
              Resume
            </button>
            <button onClick={resetTime} className='px-4 py-2 bg-red-500 text-white rounded-md'>
              Reset
            </button>
          </div>
      </div>
      )}
    </div>
  )
}
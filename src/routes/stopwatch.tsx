import { createFileRoute } from '@tanstack/react-router'
import { useState, useRef } from 'react'

export const Route = createFileRoute('/stopwatch')({
  component: RouteComponent,
})

function RouteComponent() {
  const [secondsElapsed, setSecondsElapsed] = useState(0)
  const [stopwatchState, setStopwatchState] = useState<'initial' | 'running' | 'paused'>('initial')
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined)

  function start() {
    intervalRef.current = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1)
    }, 1000)
    setStopwatchState('running')
  }

  function pause() {
    clearInterval(intervalRef.current)
    setStopwatchState('paused')
  }

  function reset() {
    setSecondsElapsed(0)
    setStopwatchState('initial')
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-72 h-56 flex flex-col items-center justify-evenly border border-white rounded-md'>
        {secondsElapsed} seconds elapsed
        {stopwatchState === 'initial' && (
          <button onClick={start} className='px-4 py-2 bg-green-500 text-white rounded-md'>
            Start
          </button>
        )}

        {stopwatchState === 'running' && (
        <button onClick={pause} className='px-4 py-2 bg-gray-500 text-white rounded-md'>
          Pause
        </button>
        )}
        {stopwatchState === 'paused' && (
          <div className='flex items-center justify-center gap-4'>
            <button onClick={start} className='px-4 py-2 bg-gray-500 text-white rounded-md'>
              Resume
            </button>
            <button onClick={reset} className='px-4 py-2 bg-red-500 text-white rounded-md'>
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
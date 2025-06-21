import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/traffic-light')({
  component: RouteComponent,
})

type Colour = 'red' | 'orange' | 'green'
const RED = 'red'
const ORANGE = 'orange'
const GREEN = 'green'
const RED_DELAY = 3000
const ORANGE_DELAY = 1000
const GREEN_DELAY = 3000

function RouteComponent() {
  const [activeColour, setActiveColour] = useState<Colour>(RED)

  useEffect(() => {
    if (activeColour === RED) {
      setTimeout(() => {
        setActiveColour(GREEN)
      }, RED_DELAY)
    } else if (activeColour === GREEN) {
      setTimeout(() => {
        setActiveColour(ORANGE)
      }, GREEN_DELAY)
    } else if (activeColour === ORANGE) {
      setTimeout(() => {
        setActiveColour(RED)
      }, ORANGE_DELAY)
    }

    console.log(activeColour)
  }, [activeColour])

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col items-center justify-center gap-1 border border-white w-32 h-80 p-4 rounded'>
        <TrafficLight active={activeColour} />
      </div>
    </div>
  )
}

function TrafficLight({ active }: { active: Colour }) {
  function isActive(colour: Colour) {
    return colour === active
  }

  return (
    <>
      <div className={`bg-red-600 size-24 rounded-full ${isActive(RED) ? 'opacity-100' : 'opacity-30'}`}></div>
      <div className={`bg-orange-600 size-24 rounded-full ${isActive(ORANGE) ? 'opacity-100' : 'opacity-30'}`}></div>
      <div className={`bg-green-600 size-24 rounded-full ${isActive(GREEN) ? 'opacity-100' : 'opacity-30'}`}></div>
    </>
  )
}

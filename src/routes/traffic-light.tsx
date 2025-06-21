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
      <div className={`bg-[${isActive(RED) ? '#c71306' : '#4f3a3c'}] size-24 rounded-full`}></div>
      <div className={`bg-[${isActive(ORANGE) ? '#c78006' : '#4f4b3a'}] size-24 rounded-full`}></div>
      <div className={`bg-[${isActive(GREEN) ? '#06c73d' : '#3a4f3b'}] size-24 rounded-full`}></div>
    </>
  )
}

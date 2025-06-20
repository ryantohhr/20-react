import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/traffic-light')({
  component: RouteComponent,
})

type Colour = 'red' | 'orange' | 'green'

function RouteComponent() {
  const [activeColour, setActiveColour] = useState<Colour>('red')

  useEffect(() => {
    function cycle() {
      setActiveColour('red')
      
      setTimeout(() => {
        setActiveColour('green')
      }, 3000)
      
      setTimeout(() => {
        setActiveColour('orange')
      }, 6000)
      
      setTimeout(() => {
        setActiveColour('red')
      }, 7000)
    }

    cycle()
    
    const interval = setInterval(cycle, 7000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col items-center justify-center gap-1 border border-white w-32 h-80 p-4 rounded'>
        <TrafficLight active={activeColour} />
      </div>
    </div>
  )
}

function TrafficLight({ active }: { active: Colour }) {
  return (
    <>
      {active === 'green' && (
        <>
          <div className={`bg-[#4f3a3c] w-24 h-24 rounded-full`}></div>
          <div className={`bg-[#4f4b3a] w-24 h-24 rounded-full`}></div>
          <div className={`bg-[#06c73d] w-24 h-24 rounded-full`}></div>
        </>
      )}
      {active === 'orange' && (
        <>
          <div className={`bg-[#4f3a3c] w-24 h-24 rounded-full`}></div>
          <div className={`bg-[#c78006] w-24 h-24 rounded-full`}></div>
          <div className={`bg-[#3a4f3b] w-24 h-24 rounded-full`}></div>
        </>
      )}
      {active === 'red' && (
        <>
          <div className={`bg-[#c71306] w-24 h-24 rounded-full`}></div>
          <div className={`bg-[#4f4b3a] w-24 h-24 rounded-full`}></div>
          <div className={`bg-[#3a4f3b] w-24 h-24 rounded-full`}></div>
        </>
      )}
    </>
  )
}

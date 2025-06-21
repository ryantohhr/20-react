import { createFileRoute } from '@tanstack/react-router'
import { ChangeEvent, useState } from 'react'
import { start } from 'repl'

export const Route = createFileRoute('/gradient')({
  component: RouteComponent,
})

type GradientStyle = {
  start: string,
  end: string,
  direction: string
}

const startGradient = {
  start: '#3437eb',
  end: '#34eb4c',
  direction: 'right'
}

function RouteComponent() {
  const [gradientStyle, setGradientStyle] = useState<GradientStyle>(startGradient)

  function handleGradientChange(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
    if (e.target.id === 'startHexInput') {
      setGradientStyle({ ...gradientStyle, start: e.target.value })
    } else if (e.target.id === 'endHexInput') {
      setGradientStyle({ ...gradientStyle, end: e.target.value })
    } else {
      setGradientStyle({ ...gradientStyle, direction: e.target.value })
    }
  }

  return (
    <div className='flex items-center justify-center h-screen p-20 gap-4'>
      <div className='flex flex-col w-1/3 h-full gap-4 border border-white rounded-md p-4'>
        <div className='flex flex-col items-start gap-1 text-sm'>
          From Hex
          <input id='startHexInput' onChange={handleGradientChange} type="text" className='w-full bg-white text-black rounded-sm px-1 py-1/2'/>
        </div>
        <div className='flex flex-col items-start gap-1 text-sm'>
          To Hex
          <input id='endHexInput' onChange={handleGradientChange} type="text" className='w-full bg-white text-black rounded-sm px-1 py-1/2'/>
        </div>
        <div className='flex flex-col items-start gap-1 text-sm'>
          <label htmlFor="direction">Direction</label>
          <select id='direction' onChange={handleGradientChange} name="direction" className='w-full bg-white text-black rounded-sm'>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </div>
      </div>
      <div style={{background: `linear-gradient(to ${gradientStyle.direction}, ${gradientStyle.start}, ${gradientStyle.end})`}} className='w-2/3 h-full border border-white rounded-md'>
      </div>
    </div>
  )
}

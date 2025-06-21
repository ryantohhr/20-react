import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/gradient')({
  component: RouteComponent,
})

function RouteComponent() {
  const [startHex, setStartHex] = useState('#eb3434')
  const [endHex, setEndHex] = useState('#3440eb')
  const [direction, setDirection] = useState('right')

  return (
    <div className='flex h-screen p-20 gap-4'>
      <form className='text-sm flex flex-col gap-2 border border-white rounded-md p-4'>
        <label htmlFor='startHex'>From Hex</label>
        <input 
          name='startHex' 
          onChange={(e) => setStartHex(e.target.value)} 
          type='text'
          className='w-full bg-gray-300 text-black rounded-sm px-2 py-1'/>
        <label htmlFor='endHex'>To Hex</label>
        <input 
          name='endHex' 
          onChange={(e) => setEndHex(e.target.value)} 
          type='text'
          className='w-full bg-gray-300 text-black rounded-sm px-2 py-1'/>
        <label htmlFor="direction">Direction</label>
        <select 
          name='direction' 
          onChange={(e) => setDirection(e.target.value)} 
          className='w-full bg-gray-300 text-black p-2 rounded-sm'>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </form>
      <div
        style={{
          background: `linear-gradient(to ${direction}, ${startHex}, ${endHex})`}}
        className='flex-grow w-2/3 h-full border border-white rounded-md'>
      </div>
    </div>
  )
}

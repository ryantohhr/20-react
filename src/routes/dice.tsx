import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/dice')({
  component: RouteComponent,
})

function RouteComponent() {
  const [roll, setRoll] = useState<number | null>(null)

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-8'>
      <button onClick={() => {setRoll(Math.ceil(Math.random() * 6))}} className='px-4 py-2 bg-white text-black rounded-md'>
        Roll
      </button>
      {!roll && (
          <p className='text-2xl font-bold'>Roll the die!</p>
      )}
      {roll && (
        <div className='flex items-center justify-center w-40 h-40 bg-white rounded-md p-6'>
          {roll === 1 && (
            <div className='flex items-center justify-center'>
              <div className='bg-black rounded-full w-8 h-8'></div>
            </div>
          )}
          {roll === 2 && (
            <div className='flex items-center justify-between w-28'>
              <div className='bg-black rounded-full w-8 h-8'></div>
              <div className='bg-black rounded-full w-8 h-8'></div>
            </div>
          )}
          {roll === 3 && (
            <div className='flex flex-col gap-2 w-40'>
              <div className='bg-black rounded-full w-8 h-8'></div>
              <div className='self-center bg-black rounded-full w-8 h-8'></div>
              <div className='self-end bg-black rounded-full w-8 h-8'></div>
            </div>
          )}
          {roll === 4 && (
            <div className='flex items-center justify-between w-40 h-40'>
              <div className='flex flex-col justify-between h-28'>
                <div className='bg-black rounded-full w-8 h-8'></div>
                <div className='bg-black rounded-full w-8 h-8'></div>
              </div>
              <div className='flex flex-col items-end justify-between h-28'>
                <div className='bg-black rounded-full w-8 h-8'></div>
                <div className='bg-black rounded-full w-8 h-8'></div>
              </div>
            </div>
          )}
          {roll === 5 && (
            <div className='flex items-center justify-between w-40 h-40'>
              <div className='flex flex-col justify-between h-28'>
                <div className='bg-black rounded-full w-8 h-8'></div>
                <div className='bg-black rounded-full w-8 h-8'></div>
              </div>
              <div className='bg-black rounded-full w-8 h-8'></div>
              <div className='flex flex-col items-end justify-between h-28'>
                <div className='bg-black rounded-full w-8 h-8'></div>
                <div className='bg-black rounded-full w-8 h-8'></div>
              </div>
            </div>
          )}
          {roll === 6 && (
            <div className='flex items-center justify-between w-40 h-40'>
              <div className='flex flex-col justify-between h-28'>
                <div className='bg-black rounded-full w-8 h-8'></div>
                <div className='bg-black rounded-full w-8 h-8'></div>
              </div>
              <div className='flex flex-col items-end justify-between h-28'>
                <div className='bg-black rounded-full w-8 h-8'></div>
                <div className='bg-black rounded-full w-8 h-8'></div>
              </div>
              <div className='flex flex-col items-end justify-between h-28'>
                <div className='bg-black rounded-full w-8 h-8'></div>
                <div className='bg-black rounded-full w-8 h-8'></div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/quote-generator')({
  component: RouteComponent,
})

function RouteComponent() {
  const [state, setState] = useState<'loading' | 'done' | null>(null)
  const [quote, setQuote] = useState<string | null>(null)

  async function getQuote() {
    setState('loading')
    const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random')
    const result = await response.json()
    setQuote(result.sentence)
    setState('done')
  }

  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <div className='flex flex-col items-center justify-center gap-12 w-2/3 h-1/3 border border-white rounded-md text-wrap text-center p-8'>
        {state === 'done' && (
          `"${quote}"`
        )}
        {state === 'loading' && (
          'Loading...'
        )}
        <button onClick={getQuote} className='bg-white text-black p-4 rounded-md'>Next Quote</button>
      </div>
    </div>
  )
}

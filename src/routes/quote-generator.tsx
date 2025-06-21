import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/quote-generator')({
  component: RouteComponent,
})

type Quote = {
  sentence: string
  character: {
    name: string
    slug: string
    house: {
      name: string
      slug: string
    }
  }
}

async function getQuote() {
  const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random')
  return await response.json() as Quote
}

function RouteComponent() {
  const { data: quote, isFetching, refetch } = useQuery({
    queryKey: ['quote'],
    queryFn: getQuote
  })

  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <div className='flex flex-col items-center justify-center gap-12 w-2/3 h-1/3 border border-white rounded-md text-wrap text-center p-8'>
        {isFetching ? 'Loading...' : `"${quote?.sentence}"`}
        <button onClick={() => refetch()} className='hover:bg-gray-300 bg-white text-black p-4 rounded-md'>Next Quote</button>
      </div>
    </div>
  )
}

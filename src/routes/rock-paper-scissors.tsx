import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/rock-paper-scissors')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-5'>
        <p className='text-2xl font-bold'>Pick your weapon</p>
        <div className='flex items-center justify-center gap-3'>
            <button className='w-44 h-80 border-2 border-white rounded-md bg-[#120d33]'>Rock</button>
            <button className='w-44 h-80 border-2 border-white rounded-md bg-[#120d33]'>Paper</button>
            <button className='w-44 h-80 border-2 border-white rounded-md bg-[#120d33]'>Scissors</button>
        </div>
    </div>
)
}

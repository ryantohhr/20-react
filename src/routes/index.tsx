import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
    const challenges = [
        {
            title: 'Rock Paper Scissors',
            path: '/rock-paper-scissors',
        },
        {
          title: 'Stopwatch',
          path: '/stopwatch'
        },
        {
          title: 'Dice',
          path: '/dice'
        },
        {
          title: 'Traffic Light',
          path: '/traffic-light'
        },
        {
          title: 'Quote Generator',
          path: '/quote-generator'
        },
        {
          title: 'Gradient',
          path: '/gradient'
        }
    ]
  return (
    <div className='flex items-center justify-center h-screen gap-5'>
    {challenges.map((challenge) => {
        return (
          <div className='px-4 py-2 bg-white rounded-md'>
            <Link className='px-4 py-2 text-black' to={challenge.path}>
                {challenge.title}
            </Link>
          </div>
        )
    })}
    </div>
  )
}

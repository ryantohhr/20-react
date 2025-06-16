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
        }
    ]
  return (
    challenges.map((challenge) => {
        return (
            <div>
                <Link to={challenge.path}>
                    {challenge.title}
                </Link>
            </div>
        )
    })
  )
}

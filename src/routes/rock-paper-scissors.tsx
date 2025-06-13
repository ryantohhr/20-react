import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/rock-paper-scissors')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/rock-paper-scissors"!</div>
}

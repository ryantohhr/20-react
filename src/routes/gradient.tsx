import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/gradient')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/gradient"!</div>
}

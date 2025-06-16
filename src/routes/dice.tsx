import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dice')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dice"!</div>
}

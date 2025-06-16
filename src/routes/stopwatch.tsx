import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/rock-paper-scissors')({
  component: RouteComponent,
})

function RouteComponent() {
  
}
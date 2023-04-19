// global
import * as React from 'react'
// local

export interface ComponentProps {
  children?: React.ReactNode
}

export function Component({ children }: ComponentProps) {
  return (
    <div>
      <p>Component</p>
      {children}
    </div>
  )
}

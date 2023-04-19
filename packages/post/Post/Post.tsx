// global
import * as React from 'react'
// local

export interface PostProps {
  children?: React.ReactNode
}

export function Post({ children }: PostProps) {
  return (
    <div>
      <p>Post</p>
      {children}
    </div>
  )
}

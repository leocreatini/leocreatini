// global
import * as React from 'react'
import { render } from '@testing-library/react'
// local
import { Post } from './Post'

describe('Post', () => {
  it('should render', () => {
    const { getByText } = render(<Post />)
    expect(getByText('Post')).toBeTruthy()
  })
})

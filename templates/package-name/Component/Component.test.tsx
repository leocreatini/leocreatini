// global
import * as React from 'react'
import { render } from '@testing-library/react'
// local
import { Component } from './Component'

describe('Component', () => {
  it('should render', () => {
    const { getByText } = render(<Component />)
    expect(getByText('Component')).toBeTruthy()
  })
})

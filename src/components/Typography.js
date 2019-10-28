import styled from 'styled-components'

export const H1 = styled.h1`
  text-align: ${({ align }) => align || 'left'};
  font-size: 3rem;
  margin: ${({ margin }) => margin || '0'};
  user-select: none;
`

export const H2 = styled.h2`
  text-align: ${({ align }) => align || 'left'};
  font-size: 1.5rem;
  margin: ${({ margin }) => margin || '0 0 1rem'};
  user-select: none;
`

export const P = styled.p`
  text-align: ${({ align }) => align || 'left'};
  max-width: 40rem;
  margin: 0 0 1rem;
`

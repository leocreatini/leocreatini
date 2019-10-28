import React from 'react'
import styled from 'styled-components'

import { H1 } from './Typography'

const Container = styled.header`
  margin: 0 0 3rem;
`

const Header = ({ siteTitle }) => (
  <Container>
    <H1 align="center">{siteTitle}</H1>
  </Container>
)

export default Header

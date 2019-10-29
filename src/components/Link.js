import styled, { css, keyframes } from 'styled-components'

import { Link as GatsbyLink } from 'gatsby'

const glow = keyframes`
  0% { text-shadow: 0 0 0 hsla(0, 100%, 100%, 1); }
 50% { text-shadow: 0 0 6px hsla(0, 100%, 100%, 0.5); }
 100% { text-shadow: 0 0 0 hsla(0, 100%, 100%, 1); }
`

const LinkStyles = css`
  text-decoration: none;
  color: #fafafa;
  position: relative;
  height: 1.5rem;
  line-height: 1.5rem;
  margin: 0 0 0 0.2rem;

  &:hover,
  &:active {
    animation: ${glow} 2000ms 120ms ease-in-out infinite;
  }
`

export const ExternalLink = styled.a.attrs({
  rel: 'noopener noreferrer nofollow',
  target: '_blank',
})`
  ${LinkStyles}
`

export const InternalLink = styled(GatsbyLink)`
  ${LinkStyles}
`

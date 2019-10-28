import styled, { css, keyframes } from 'styled-components'

import { Link as GatsbyLink } from 'gatsby'

const glow = keyframes`
  0% { background: #28F; opacity: 0; }
 50% { background: #28F; opacity: 1; }
 100% { background: #28F; opacity: 0; }
`

const LinkStyles = css`
  text-decoration: none;
  color: #fafafa;
  transition: border-bottom-color 180ms ease-in-out;
  position: relative;
  height: 1rem;
  line-height: 1rem;
  border-bottom: 1px solid white;

  &:after {
    content: '';
    position: absolute;
    opacity: 0;
    width: 0.5rem;
    height: 0.5rem;
    left: -0.875rem;
    top: 0.25rem;
    transform: rotate(45deg);
  }

  &:hover,
  &:active {
    border-bottom-color: transparent;

    &:after,
    &:after {
      animation: ${glow} 1200ms 120ms ease-in-out infinite;
    }
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

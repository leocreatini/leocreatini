import styled from 'styled-components'

const ListItem = styled.li`
  position: relative;
  height: 1.5rem;
  list-style-type: none;

  &:before {
    position: absolute;
    content: '';
    left: -0.75rem;
    top: 0.5rem;
    width: 0.5rem;
    height: 0.5rem;
    border: 1px solid #fff;
    border-radius: 100%;
    transition: background 180ms ease-in-out;
  }

  &:after {
    position: absolute;
    content: '';
    left: calc(-1.25rem - 2px);
    top: 0.325rem;
    width: 0.75rem;
    height: 1px;
    border-top: 1px solid #fff;
    transform: rotate(45deg);
  }

  & a {
    text-decoration: none;
  }

  &:hover {
    &:before {
      background: #fff;
    }
  }
`

export default ListItem

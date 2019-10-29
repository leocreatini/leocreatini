import styled from 'styled-components'

const List = styled.ul`
  padding: 0.75rem 0 0 1.25rem;
  margin: 1rem 0 0 2rem;
  position: relative;

  &:before {
    position: absolute;
    content: '';
    left: -1.125rem;
    top: -0.625rem;
    width: 1.325rem;
    height: 1px;
    border-top: 1px solid #fff;
    transform: rotate(45deg);
  }
  &:after {
    content: '';
    position: absolute;
    height: calc(100% - 1.25rem);
    width: 1px;
    background: #fff;
    left: -1px;
    top: -2px;
  }
`

export default List

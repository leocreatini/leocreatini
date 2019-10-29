import styled from 'styled-components'

const ListBorder = styled.div`
  position: relative;
  border-top: 1px solid #fff;
  margin: 0 0 1px;

  &:before,
  &:after {
    position: absolute;
    content: '';
    top: -0.25rem;
    width: 0.5rem;
    height: 0.5rem;
    border: 1px solid #fff;
    border-radius: 100%;
  }

  &:before {
    left: -0.5rem;
    background: #fff;
  }
  &:after {
    right: -0.5rem;
  }
`

export default ListBorder

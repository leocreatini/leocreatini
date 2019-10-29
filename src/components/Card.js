import styled from 'styled-components'

export const Base = styled.div`
  box-sizing: border-box;
  box-shadow: 2px 4px 2px 1px rgba(0, 0, 0, 0.15);
  max-width: ${({ width }) => width || 'auto'};
  border-radius: 2px;
  background: hsla(0, 10%, 15%, 1);
  border: 1px solid hsla(0, 10%, 25%, 1);
  color: #fafafa;
`

export const Circle = styled(Base)`
  border-radius: 100%;
  width: ${({ width }) => width || 'auto'};
  height: ${({ width }) => width || 'auto'};
  position: relative;
`

export const Body = styled.div`
  padding: ${({ padding }) => padding || '1.5rem'};
  margin: ${({ margin }) => margin || '1.5rem'};
  max-width: ${({ width }) => width || 'auto'};
`

function Card() {}

Card.Base = Base
Card.Circle = Circle
Card.Body = Body

export default Card

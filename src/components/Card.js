import styled from 'styled-components'

export const Card = styled.div`
  padding: 1.5rem;
  box-sizing: border-box;
  box-shadow: 2px 4px 2px 1px rgba(0, 0, 0, 0.15);
  max-width: ${({ width }) => width || 'auto'};
  border-radius: 2px;
  background: hsla(0, 10%, 15%, 1);
  border: 1px solid hsla(0, 10%, 30%, 1);
  color: #fafafa;
`

export const CircleCard = styled.div`
  padding: 1.5rem;
  box-sizing: border-box;
  box-shadow: 2px 4px 2px 1px rgba(0, 0, 0, 0.15);
  width: ${({ width }) => width || 'auto'};
  height: ${({ width }) => width || 'auto'};
  border-radius: 100%;
  background: hsla(0, 10%, 15%, 1);
  border: 1px solid hsla(0, 10%, 30%, 1);
  color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default Card

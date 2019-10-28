import styled from 'styled-components'

export const FlexBox = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  margin: ${({ margin }) => margin || '0'};
`

export default FlexBox

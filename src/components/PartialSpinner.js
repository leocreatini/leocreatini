import styled, { keyframes } from 'styled-components'

const spin = ({ scale }) => keyframes`
  0% { transform: scale(${scale || 1.1}) rotate(0deg); }
  100% { transform: scale(${scale || 1.1}) rotate(360deg); }
`

export const PartialSpinner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  opacity: 0.1;
  border-top: ${({ size }) => size || '10px'} solid white;
  border-right: ${({ size }) => size || '10px'} solid transparent;
  border-bottom: ${({ size }) => size || '10px'} solid transparent;
  border-left: ${({ size }) => size || '10px'} solid transparent;
  transform: scale(${({ scale }) => scale || 1.1});
  animation: ${spin} ${({ timing }) => timing || '1200ms'} linear infinite;
  animation-direction: ${({ reverse }) => (reverse ? 'reverse' : 'forward')};
`

export default PartialSpinner

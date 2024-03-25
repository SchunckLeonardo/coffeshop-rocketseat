import styled from 'styled-components'

export const IconWrapper = styled.button`
  cursor: pointer;
  line-height: 0;
  border: none;
  background: transparent;
  color: ${(p) => p.theme['purple-500']};

  &:not(&:disabled):hover {
    color: ${(p) => p.theme['purple-800']};
  }
`

export const Quantity = styled.div`
  padding: 0.5rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  background: ${(p) => p.theme['base-button']};
  text-align: center;

  p {
    font-size: 1rem;
    font-weight: 400;
  }
`

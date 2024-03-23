import styled from 'styled-components'

export const CoffeeCardInCheck = styled.div`
  position: relative;
  display: flex;
  padding: 0.5rem 0.25rem;
  padding-bottom: 1.5rem;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${(p) => p.theme['base-button']};

  .price {
    color: ${(p) => p.theme['base-text']};
    font-size: 1rem;
    font-weight: 700;
  }

  .info {
    display: flex;
    gap: 1.25rem;

    img {
      width: 64px;
      height: 64px;
    }

    .coffee-name {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      h5 {
        font-size: 1rem;
        font-weight: 400;
        color: ${(p) => p.theme['base-subtitle']};
      }
    }
  }
`

export const QuantityAndDelete = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  .delete {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    height: 100%;
    padding: 0 8px;
    border-radius: 6px;
    background: ${(p) => p.theme['base-button']};
    color: ${(p) => p.theme['base-text']};
    font-size: 0.75rem;
    font-weight: 400;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      background: ${(p) => p.theme['base-hover']};
    }

    svg {
      color: ${(p) => p.theme['purple-500']};
    }
  }
`

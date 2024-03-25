import styled from 'styled-components'

export const CardCoffeeContainer = styled.div`
  border-radius: 6px 36px;
  background: ${(p) => p.theme['base-card']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem;

  figure {
    position: relative;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 120px;
    height: 120px;
    position: absolute;
    top: -50px;
  }
`

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background-color: ${(p) => p.theme['yellow-100']};
    color: ${(p) => p.theme['yellow-800']};
    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: 700;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  text-align: center;

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    font-family: 'Baloo 2';
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(p) => p.theme['base-label']};
  }
`

export const PriceAndQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h5 {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(p) => p.theme['base-text']};

    span {
      color: ${(p) => p.theme['base-text']};
      font-size: 1.5rem;
      font-weight: 800;
      font-family: 'Baloo 2';
      margin-left: 0.3rem;
    }
  }
`

export const QuantityAndCart = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 30%;
`

export const ButtonShoppingCart = styled.span`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme['purple-800']};
  color: ${(p) => p.theme.white};
  border-radius: 6px;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background-color: ${(p) => p.theme['purple-500']};
  }
`

import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 104px;
  padding: 2rem 10rem;
`

export const LinksNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`

export const Localization = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(p) => p.theme['purple-100']};

  h5 {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${(p) => p.theme['purple-800']};
  }

  svg {
    color: ${(p) => p.theme['purple-500']};
  }
`

export const Cart = styled.div`
  border-radius: 6px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme['yellow-100']};

  svg {
    color: ${(p) => p.theme['yellow-500']};
  }
`

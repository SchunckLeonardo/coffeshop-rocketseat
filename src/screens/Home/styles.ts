import styled from 'styled-components'

import BackgroundImage from '../../assets/background-image.svg'

export const IntroductionSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 5.875rem 10rem;
  overflow: hidden;
  background: url(${BackgroundImage}) no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  backdrop-filter: blur(80px);
`

export const TextIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4rem;
  width: 50%;
`

export const TitleIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: ${(p) => p.theme['base-title']};
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(p) => p.theme['base-subtitle']};
  }
`

export const FigureIntroduction = styled.figure`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const Capacities = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  gap: 2.5rem;
  flex-wrap: wrap;
`

export const CapacityBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  p {
    font-size: 1rem;
    font-weight: 400;
    color: ${(p) => p.theme['base-text']};
  }
`

interface BoxIconProps {
  variant: 'cart' | 'package' | 'timer' | 'coffee'
}

export const BoxIcon = styled.span<BoxIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 0.5rem;
  color: ${(p) => p.theme.white};
  background-color: ${(p) => {
    if (p.variant === 'cart') {
      return p.theme['yellow-800']
    } else if (p.variant === 'package') {
      return p.theme['base-text']
    } else if (p.variant === 'timer') {
      return p.theme['yellow-500']
    } else if (p.variant === 'coffee') {
      return p.theme['purple-500']
    }
  }};
`

import styled from 'styled-components'

export const MainContainerSuccess = styled.main`
  padding: 5rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  .title {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    h2 {
      font-family: 'Baloo 2';
      font-size: 2rem;
      font-weight: 800;
      color: ${(p) => p.theme['yellow-800']};
    }

    p {
      font-size: 1.25rem;
      font-weight: 400;
      color: ${(p) => p.theme['base-subtitle']};
    }
  }
`

export const SectionInfoDelivering = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .infos-delivering {
    padding: 2.5rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    width: 35%;
    background:
      linear-gradient(
          ${(p) => p.theme.background},
          ${(p) => p.theme.background}
        )
        padding-box,
      linear-gradient(
          to right,
          ${(p) => p.theme['yellow-500']},
          ${(p) => p.theme['purple-500']}
        )
        border-box;
    border-radius: 6px 36px;
    border: 1px solid transparent;
  }
`

interface InfosDeliverProps {
  variant: 'purple' | 'yellow' | 'orange'
}

export const InfosDeliver = styled.div<InfosDeliverProps>`
  display: flex;
  gap: 0.75rem;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  h4 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(p) => p.theme['base-text']};

    span {
      font-weight: 700;
    }
  }

  p {
    color: ${(p) => p.theme['base-text']};
    font-weight: 700;
  }

  .icon-span {
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: ${(p) => p.theme.white};
    background: ${(p) => {
      if (p.variant === 'purple') {
        return p.theme['purple-500']
      } else if (p.variant === 'yellow') {
        return p.theme['yellow-500']
      } else if (p.variant === 'orange') {
        return p.theme['yellow-800']
      }
    }};
  }
`

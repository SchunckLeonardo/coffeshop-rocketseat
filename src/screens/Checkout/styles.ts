import * as ToggleGroup from '@radix-ui/react-toggle-group'
import styled from 'styled-components'

export const MainContainerCheckout = styled.main`
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const SectionCheckoutFill = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 0.9375rem;

  .title {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(p) => p.theme['base-subtitle']};
  }
`

export const FormBox = styled.form`
  width: 100%;
  border-radius: 6px;
  background: ${(p) => p.theme['base-card']};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .inputDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;

    .opcional {
      position: relative;
      width: 100%;

      span {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: ${(p) => p.theme['base-label']};
        font-size: 0.75rem;
        font-style: italic;
        font-weight: 400;
      }
    }
  }
`

interface LabelBoxProps {
  variant: 'yellow' | 'purple'
}

export const LabelBox = styled.div<LabelBoxProps>`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: flex-start;

  svg {
    color: ${(p) =>
      p.variant === 'yellow' ? p.theme['yellow-800'] : p.theme['purple-800']};
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    h4 {
      font-size: 1rem;
      color: ${(p) => p.theme['base-subtitle']};
      font-weight: 500;
    }

    p {
      color: ${(p) => p.theme['base-text']};
      font-size: 0.875rem;
      font-weight: 400;
    }
  }
`

interface BaseInputProps {
  variant: number
}

export const BaseInput = styled.input<BaseInputProps>`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(p) => p.theme['base-button']};
  background: ${(p) => p.theme['base-input']};

  color: ${(p) => p.theme['base-text']};
  font-size: 0.875rem;
  font-weight: 400;

  width: ${(p) => p.variant}%;

  &::placeholder {
    font-size: 0.875rem;
    color: ${(p) => p.theme['base-label']};
    font-weight: 400;
  }
`

export const PaymentBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background: ${(p) => p.theme['base-card']};
  border-radius: 6px;
`

export const ToggleGroupRoot = styled(ToggleGroup.Root)`
  display: flex;
  justify-content: stretch;
  align-items: center;
  gap: 0.75rem;
`

export const Payment = styled.div`
  width: 35%;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 6px;
  border: 1px solid transparent;
  background: ${(p) => p.theme['base-button']};
  gap: 0.75rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 400;
  cursor: pointer;

  &[data-state='on'] {
    border: 1px solid ${(p) => p.theme['purple-500']};
    background: ${(p) => p.theme['purple-100']};
  }

  &:not(&[data-state='on']):hover {
    background-color: ${(p) => p.theme['base-hover']};
  }

  svg {
    color: ${(p) => p.theme['purple-500']};
  }
`

export const CoffeeInCart = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
  width: 30%;

  h3 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(p) => p.theme['base-subtitle']};
  }

  section {
    display: flex;
    flex-direction: column;
    border-radius: 6px 44px;
    background: ${(p) => p.theme['base-card']};
    padding: 40px;
    gap: 1.5rem;
  }
`

export const TotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .tax {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${(p) => p.theme['base-text']};
    }
  }

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(p) => p.theme['base-subtitle']};
    }
  }
`

export const ButtonConfirmOrder = styled.button`
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  background: ${(p) => p.theme['yellow-500']};
  border: none;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${(p) => p.theme.white};
  transition: 0.1s;
  cursor: pointer;

  &:hover {
    background: ${(p) => p.theme['yellow-800']};
  }
`

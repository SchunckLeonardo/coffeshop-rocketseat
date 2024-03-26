import { Minus, Plus } from '@phosphor-icons/react'

import { IconWrapper, Quantity } from './styles'

interface AddOrRemoveQntProps {
  qnt: number
  onIncrease: () => void
  onDecrease: () => void
}

export function AddOrRemoveQnt({
  qnt,
  onIncrease,
  onDecrease,
}: AddOrRemoveQntProps) {
  return (
    <Quantity>
      <IconWrapper type="button" disabled={qnt <= 1} onClick={onDecrease}>
        <Minus size={14} weight="bold" />
      </IconWrapper>
      <p>{qnt}</p>
      <IconWrapper type="button" onClick={onIncrease}>
        <Plus size={14} weight="bold" />
      </IconWrapper>
    </Quantity>
  )
}

import { Trash } from '@phosphor-icons/react'

import { CartItems } from '../../context/CartContext'
import { useCart } from '../../hooks/useCart'
import { formatMoney } from '../../utils/formatMoney'
import { AddOrRemoveQnt } from '../AddOrRemoveQnt'
import { CoffeeCardInCheck, QuantityAndDelete } from './styles'

interface CardCoffeeInCartProps {
  coffee: CartItems
}

export function CardCoffeeInCart({ coffee }: CardCoffeeInCartProps) {
  const { updateQuantityInCartItems, removeCoffeeInCartItems } = useCart()

  const handleClickDeleteCoffeeInCartItems = () => {
    removeCoffeeInCartItems(coffee)
  }

  const onIncrease = () => {
    updateQuantityInCartItems(coffee, 'increase')
  }

  const onDecrease = () => {
    updateQuantityInCartItems(coffee, 'decrease')
  }

  return (
    <CoffeeCardInCheck>
      <div className="info">
        <img src={coffee.image} alt="" />
        <div className="coffee-name">
          <h5>{coffee.name}</h5>
          <QuantityAndDelete>
            <AddOrRemoveQnt
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              qnt={coffee.quantity}
            />
            <div
              className="delete"
              onClick={handleClickDeleteCoffeeInCartItems}
            >
              <Trash size={16} />
              Remover
            </div>
          </QuantityAndDelete>
        </div>
      </div>
      <p className="price">R$ {formatMoney(coffee.price * coffee.quantity)}</p>
    </CoffeeCardInCheck>
  )
}

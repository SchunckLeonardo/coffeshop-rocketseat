import { ShoppingCart } from '@phosphor-icons/react'
import { useState } from 'react'

import { useCart } from '../../hooks/useCart'
import { Coffee } from '../../interfaces/Coffe'
import { formatMoney } from '../../utils/formatMoney'
import { AddOrRemoveQnt } from '../AddOrRemoveQnt'
import {
  ButtonShoppingCart,
  CardCoffeeContainer,
  Infos,
  PriceAndQuantity,
  QuantityAndCart,
  Tags,
} from './styles'

interface CardCoffeeProps {
  coffee: Coffee
}

export function CardCoffee({ coffee }: CardCoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeInCart } = useCart()

  const onIncrease = () => {
    setQuantity((state) => state + 1)
  }

  const onDecrease = () => {
    setQuantity((state) => state - 1)
  }

  const handleAddCoffeeInCartItems = () => {
    const coffeeCartItem = {
      ...coffee,
      quantity,
    }
    addCoffeeInCart(coffeeCartItem)
  }

  return (
    <CardCoffeeContainer>
      <figure>
        <img src={coffee.image} alt={coffee.name} />
      </figure>
      <Tags>
        {coffee.tags.map((tag, i) => {
          return <span key={i}>{tag}</span>
        })}
      </Tags>
      <Infos>
        <h3>{coffee.name}</h3>
        <p>{coffee.description}</p>
      </Infos>
      <PriceAndQuantity>
        <h5>
          R$
          <span>{formatMoney(coffee.price)}</span>{' '}
        </h5>
        <QuantityAndCart>
          <AddOrRemoveQnt
            onDecrease={onDecrease}
            onIncrease={onIncrease}
            qnt={quantity}
          />
          <ButtonShoppingCart onClick={handleAddCoffeeInCartItems}>
            <ShoppingCart size={22} weight="fill" />
          </ButtonShoppingCart>
        </QuantityAndCart>
      </PriceAndQuantity>
    </CardCoffeeContainer>
  )
}

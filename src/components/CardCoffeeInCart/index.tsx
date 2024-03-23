import { Minus, Plus, Trash } from '@phosphor-icons/react'

import { Quantity } from '../CardCoffee/styles'
import { CoffeeCardInCheck, QuantityAndDelete } from './styles'

interface CardCoffeeInCartProps {
  name: string
  image: string
  qnt: number
}

export function CardCoffeeInCart({ name, image, qnt }: CardCoffeeInCartProps) {
  return (
    <CoffeeCardInCheck>
      <div className="info">
        <img src={image} alt="" />
        <div className="coffee-name">
          <h5>{name}</h5>
          <QuantityAndDelete>
            <Quantity>
              <Minus size={14} weight="bold" />
              <p>{qnt}</p>
              <Plus size={14} weight="bold" />
            </Quantity>
            <div className="delete">
              <Trash size={16} />
              Remover
            </div>
          </QuantityAndDelete>
        </div>
      </div>
      <p className="price">R$ 9,90</p>
    </CoffeeCardInCheck>
  )
}

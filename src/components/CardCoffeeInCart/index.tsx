import { Minus, Plus, Trash } from '@phosphor-icons/react'

import ExpressoTradicional from '../../assets/coffee-expresso.png'
import { Quantity } from '../CardCoffee/styles'
import { CoffeeCardInCheck, QuantityAndDelete } from './styles'

export function CardCoffeeInCart() {
  return (
    <CoffeeCardInCheck>
      <div className="info">
        <img src={ExpressoTradicional} alt="" />
        <div className="coffee-name">
          <h5>Expresso Tradicional</h5>
          <QuantityAndDelete>
            <Quantity>
              <Minus size={14} weight="bold" />
              <p>1</p>
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

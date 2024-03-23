import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { useState } from 'react'

import {
  ButtonShoppingCart,
  CardCoffeeContainer,
  Infos,
  PriceAndQuantity,
  Quantity,
  QuantityAndCart,
  Tags,
} from './styles'

interface CardCoffeeProps {
  image: string
  name: string
  tags: string[]
  description: string
  onClick: () => void
  handleAddQntCoffee: (qnt: number) => void
}

export function CardCoffee({
  description,
  image,
  tags,
  name,
  onClick,
  handleAddQntCoffee,
}: CardCoffeeProps) {
  const [qnt, setQnt] = useState(1)

  return (
    <CardCoffeeContainer>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <Tags>
        {tags.map((tag, i) => {
          return <span key={i}>{tag}</span>
        })}
      </Tags>
      <Infos>
        <h3>{name}</h3>
        <p>{description}</p>
      </Infos>
      <PriceAndQuantity>
        <h5>
          R$
          <span>9,90</span>{' '}
        </h5>
        <QuantityAndCart>
          <Quantity>
            <Minus
              onClick={() => {
                qnt > 1 ? setQnt(qnt - 1) : setQnt(1)
              }}
              size={14}
              weight="bold"
            />
            <p>{qnt}</p>
            <Plus
              onClick={() => {
                qnt < 10 ? setQnt(qnt + 1) : setQnt(10)
              }}
              size={14}
              weight="bold"
            />
          </Quantity>
          <ButtonShoppingCart
            onClick={() => {
              handleAddQntCoffee(qnt)
              onClick()
            }}
          >
            <ShoppingCart size={22} weight="fill" />
          </ButtonShoppingCart>
        </QuantityAndCart>
      </PriceAndQuantity>
    </CardCoffeeContainer>
  )
}

import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

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
}

export function CardCoffee({
  description,
  image,
  tags,
  name,
}: CardCoffeeProps) {
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
            <Minus size={14} weight="bold" />
            <p>1</p>
            <Plus size={14} weight="bold" />
          </Quantity>
          <ButtonShoppingCart>
            <ShoppingCart size={22} weight="fill" />
          </ButtonShoppingCart>
        </QuantityAndCart>
      </PriceAndQuantity>
    </CardCoffeeContainer>
  )
}

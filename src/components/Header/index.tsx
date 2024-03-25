import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

import logoCoffeShop from '../../assets/logo-coffeshop.svg'
import { useCart } from '../../hooks/useCart'
import { Cart, HeaderContainer, LinksNavigation, Localization } from './styles'

export function Header() {
  const { cartQuantityItems } = useCart()
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <figure onClick={() => navigate('/')}>
        <img src={logoCoffeShop} alt="Um copo de café com um foguete no meio" />
      </figure>

      <LinksNavigation>
        <Localization>
          <MapPin weight="fill" size={22} />
          <h5>Porto Alegre, RS</h5>
        </Localization>
        <Cart onClick={() => navigate('/checkout')}>
          <ShoppingCart weight="fill" size={22} />
          {cartQuantityItems > 0 ? <span>{cartQuantityItems}</span> : <></>}
        </Cart>
      </LinksNavigation>
    </HeaderContainer>
  )
}

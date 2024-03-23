import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import logoCoffeShop from '../../assets/logo-coffeshop.svg'
import { CoffeeContext } from '../../context/CoffeeContext'
import { Cart, HeaderContainer, LinksNavigation, Localization } from './styles'

export function Header() {
  const { coffeesCart } = useContext(CoffeeContext)

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
          <span>{coffeesCart.length === 0 ? 0 : coffeesCart.length}</span>
        </Cart>
      </LinksNavigation>
    </HeaderContainer>
  )
}

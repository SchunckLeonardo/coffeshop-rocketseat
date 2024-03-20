import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import logoCoffeShop from '../../assets/logo-coffeshop.svg'
import { Cart, HeaderContainer, LinksNavigation, Localization } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeShop} alt="Um copo de café com um foguete no meio" />

      <LinksNavigation>
        <Localization>
          <MapPin weight="fill" size={22} />
          <h5>Porto Alegre, RS</h5>
        </Localization>
        <Cart>
          <ShoppingCart weight="fill" size={22} />
        </Cart>
      </LinksNavigation>
    </HeaderContainer>
  )
}

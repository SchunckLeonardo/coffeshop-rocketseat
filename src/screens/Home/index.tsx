import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { useContext } from 'react'

import CoffeeIntroduction from '../../assets/coffee-introduction.svg'
import { CardCoffee } from '../../components/CardCoffee'
import { CoffeeContext } from '../../context/CoffeeContext'
import { coffees } from '../../utils/coffee-data'
import {
  BoxIcon,
  Capacities,
  CapacityBox,
  CoffeeGrid,
  CoffeeSection,
  FigureIntroduction,
  IntroductionSection,
  TextIntroduction,
  TitleIntroduction,
} from './styles'

export function Home() {
  const { addCoffeeInCart } = useContext(CoffeeContext)
  let coffeesQnt = 0

  const handleAddQntCoffee = (qnt: number) => {
    coffeesQnt = qnt
    console.log(coffeesQnt)
  }

  return (
    <main>
      <IntroductionSection>
        <TextIntroduction>
          <TitleIntroduction>
            <h2>Encontre o café perfeito para qualquer hora do dia</h2>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleIntroduction>
          <Capacities>
            <CapacityBox>
              <BoxIcon variant="cart">
                <ShoppingCart weight="fill" size={16} />
              </BoxIcon>
              <p>Compra simples e segura</p>
            </CapacityBox>
            <CapacityBox>
              <BoxIcon variant="package">
                <Package weight="fill" size={16} />
              </BoxIcon>
              <p>Embalagem mantém o café intacto</p>
            </CapacityBox>
            <CapacityBox>
              <BoxIcon variant="timer">
                <Timer weight="fill" size={16} />
              </BoxIcon>
              <p>Entrega rápida e rastreada</p>
            </CapacityBox>
            <CapacityBox>
              <BoxIcon variant="coffee">
                <Coffee weight="fill" size={16} />
              </BoxIcon>
              <p>O café chega fresquinho até você</p>
            </CapacityBox>
          </Capacities>
        </TextIntroduction>
        <FigureIntroduction>
          <img src={CoffeeIntroduction} alt="Copo de café com grãos em volta" />
        </FigureIntroduction>
      </IntroductionSection>
      <CoffeeSection>
        <h4>Nossos cafés</h4>
        <CoffeeGrid>
          {coffees.map((coffee, i) => {
            return (
              <CardCoffee
                onClick={() => addCoffeeInCart(i, coffeesQnt)}
                key={i}
                {...coffee}
                handleAddQntCoffee={handleAddQntCoffee}
              />
            )
          })}
        </CoffeeGrid>
      </CoffeeSection>
    </main>
  )
}

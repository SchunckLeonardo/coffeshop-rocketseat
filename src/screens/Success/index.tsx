import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

import Illustration from '../../assets/delivering.svg'
import {
  InfosDeliver,
  MainContainerSuccess,
  SectionInfoDelivering,
} from './styles'

export function Success() {
  return (
    <MainContainerSuccess>
      <div className="title">
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <SectionInfoDelivering>
        <div className="infos-delivering">
          <InfosDeliver variant="purple">
            <span className="icon-span">
              <MapPin size={16} weight="fill" />
            </span>
            <h4>
              Entrega em <span>Rua João Daniel Martinelli, 102</span>
              <br /> Farrapos - Porto Alegre, RS
            </h4>
          </InfosDeliver>
          <InfosDeliver variant="yellow">
            <span className="icon-span">
              <Timer size={16} weight="fill" />
            </span>
            <div className="text-div">
              <h4>Previsão de entrega</h4>
              <p>20 min - 30 min</p>
            </div>
          </InfosDeliver>
          <InfosDeliver variant="orange">
            <span className="icon-span">
              <CurrencyDollar size={16} />
            </span>
            <div>
              <h4>Pagamento na entrega</h4>
              <p>Cartão de Crédito</p>
            </div>
          </InfosDeliver>
        </div>
        <figure>
          <img src={Illustration} alt="" />
        </figure>
      </SectionInfoDelivering>
    </MainContainerSuccess>
  )
}

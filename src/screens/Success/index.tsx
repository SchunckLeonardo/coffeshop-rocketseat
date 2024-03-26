import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useLocation } from 'react-router-dom'

import Illustration from '../../assets/delivering.svg'
import { OrderData } from '../Checkout'
import {
  InfosDeliver,
  MainContainerSuccess,
  SectionInfoDelivering,
} from './styles'

interface LocationType {
  state?: OrderData
}

export function Success() {
  const { state } = useLocation() as unknown as LocationType

  const paymentMethod = state?.paymentMethod

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
              Entrega em{' '}
              <span>
                {state?.street}, {state?.number}
              </span>
              <br /> {state?.district} - {state?.city}, {state?.state}
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
              <p>
                {paymentMethod === 'credit'
                  ? 'Cartão de crédito'
                  : paymentMethod === 'debit'
                    ? 'Cartão de débito'
                    : 'Dinheiro'}
              </p>
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

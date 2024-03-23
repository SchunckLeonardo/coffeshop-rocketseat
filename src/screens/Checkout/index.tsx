import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from '@phosphor-icons/react'

import ExpressoTradicional from '../../assets/coffee-expresso.png'
import { Quantity } from '../../components/CardCoffee/styles'
import {
  BaseInput,
  ButtonConfirmOrder,
  CoffeeCardInCheck,
  CoffeeInCart,
  FormBox,
  LabelBox,
  MainContainerCheckout,
  Payment,
  PaymentBox,
  PaymentsMethods,
  QuantityAndDelete,
  SectionCheckoutFill,
  TotalPrice,
} from './styles'

export function Checkout() {
  return (
    <MainContainerCheckout>
      <SectionCheckoutFill>
        <h3 className="title">Complete seu pedido</h3>
        <FormBox>
          <LabelBox variant="yellow">
            <MapPinLine size={22} />
            <div className="description">
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </LabelBox>
          <BaseInput variant={30} type="text" placeholder="CEP" />
          <BaseInput variant={100} type="text" placeholder="Rua" />
          <div className="inputDiv">
            <BaseInput variant={40} type="number" placeholder="Número" />
            <div className="opcional">
              <BaseInput variant={100} type="text" placeholder="Complemento" />
              <span>Opcional</span>
            </div>
          </div>
          <div className="inputDiv">
            <BaseInput variant={30} type="text" placeholder="Bairro" />
            <BaseInput variant={64} type="text" placeholder="Cidade" />
            <BaseInput variant={6} type="text" placeholder="UF" />
          </div>
        </FormBox>
        <PaymentBox>
          <LabelBox variant="purple">
            <CurrencyDollar size={22} />
            <div className="description">
              <h4>Pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </LabelBox>
          <PaymentsMethods>
            <Payment>
              <CreditCard size={16} />
              Cartão de Crédito
            </Payment>
            <Payment>
              <Bank size={16} />
              Cartão de Débito
            </Payment>
            <Payment>
              <Money size={16} />
              Dinheiro
            </Payment>
          </PaymentsMethods>
        </PaymentBox>
      </SectionCheckoutFill>
      <CoffeeInCart>
        <h3>Cafés selecionados</h3>
        <section>
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
          <TotalPrice>
            <div className="tax">
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </div>
            <div className="tax">
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div className="total">
              <p>Total</p>
              <p>R$ 33,20</p>
            </div>
          </TotalPrice>
          <ButtonConfirmOrder>Confirmar Pedido</ButtonConfirmOrder>
        </section>
      </CoffeeInCart>
    </MainContainerCheckout>
  )
}

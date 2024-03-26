import { zodResolver } from '@hookform/resolvers/zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { CardCoffeeInCart } from '../../components/CardCoffeeInCart'
import { useCart } from '../../hooks/useCart'
import { formatMoney } from '../../utils/formatMoney'
import {
  BaseInput,
  ButtonConfirmOrder,
  CoffeeInCart,
  FormBox,
  LabelBox,
  MainContainerCheckout,
  Payment,
  PaymentBox,
  SectionCheckoutFill,
  ToggleGroupRoot,
  TotalPrice,
} from './styles'

const PRICE_TAX_DELIVERING = 3.5

const confirmOrderFormValidationSchema = z.object({
  cep: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string(),
  district: z.string(),
  city: z.string(),
  state: z.string(),
  paymentMethod: z.enum(['credit', 'debit', 'money']),
})

export type OrderData = z.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function Checkout() {
  const { cartItems, totalPriceInCartItems, removeAllItensInCart } = useCart()
  const navigate = useNavigate()

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = confirmOrderForm

  const handleSubmitAddress = (data: ConfirmOrderFormData) => {
    removeAllItensInCart()
    navigate('/success', {
      state: data,
    })
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <FormBox onSubmit={handleSubmit(handleSubmitAddress)}>
        <MainContainerCheckout>
          <h3 className="title">Complete seu pedido</h3>
          <SectionCheckoutFill>
            <LabelBox variant="yellow">
              <MapPinLine size={22} />
              <div className="description">
                <h4>Endereço de Entrega</h4>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </LabelBox>
            <BaseInput
              required
              {...register('cep')}
              variant={30}
              type="text"
              placeholder="CEP"
            />
            <BaseInput
              required
              {...register('street')}
              variant={100}
              type="text"
              placeholder="Rua"
            />
            <div className="inputDiv">
              <BaseInput
                required
                {...register('number')}
                variant={40}
                type="number"
                placeholder="Número"
              />
              <div className="opcional">
                <BaseInput
                  {...register('complement')}
                  variant={100}
                  type="text"
                  placeholder="Complemento"
                />
                <span>Opcional</span>
              </div>
            </div>
            <div className="inputDiv">
              <BaseInput
                required
                {...register('district')}
                variant={30}
                type="text"
                placeholder="Bairro"
              />
              <BaseInput
                required
                {...register('city')}
                variant={64}
                type="text"
                placeholder="Cidade"
              />
              <BaseInput
                required
                {...register('state')}
                variant={8}
                type="text"
                placeholder="UF"
              />
            </div>
          </SectionCheckoutFill>
          <PaymentBox>
            <LabelBox variant="purple">
              <CurrencyDollar size={22} />
              <div className="description">
                <h4>Pagamento</h4>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </LabelBox>
            <Controller
              control={control}
              name="paymentMethod"
              render={({ field: { onChange, value } }) => (
                <ToggleGroupRoot
                  type="single"
                  onValueChange={onChange}
                  value={value}
                >
                  <ToggleGroup.Item value="credit" asChild>
                    <Payment>
                      <CreditCard size={16} />
                      Cartão de Crédito
                    </Payment>
                  </ToggleGroup.Item>
                  <ToggleGroup.Item value="debit" asChild>
                    <Payment>
                      <Bank size={16} />
                      Cartão de Débito
                    </Payment>
                  </ToggleGroup.Item>
                  <ToggleGroup.Item value="money" asChild>
                    <Payment>
                      <Money size={16} />
                      Dinheiro
                    </Payment>
                  </ToggleGroup.Item>
                </ToggleGroupRoot>
              )}
            />
          </PaymentBox>
        </MainContainerCheckout>
        <CoffeeInCart>
          <h3>Cafés selecionados</h3>
          <section>
            {cartItems.map((coffee) => {
              return <CardCoffeeInCart key={coffee.id} coffee={coffee} />
            })}
            <TotalPrice>
              <div className="tax">
                <p>Total de itens</p>
                <p>R$ {formatMoney(totalPriceInCartItems)}</p>
              </div>
              <div className="tax">
                <p>Entrega</p>
                <p>R$ {formatMoney(PRICE_TAX_DELIVERING)}</p>
              </div>
              <div className="total">
                <p>Total</p>
                <p>
                  R$ {formatMoney(PRICE_TAX_DELIVERING + totalPriceInCartItems)}
                </p>
              </div>
            </TotalPrice>
            <ButtonConfirmOrder type="submit" disabled={isSubmitting}>
              Confirmar Pedido
            </ButtonConfirmOrder>
          </section>
        </CoffeeInCart>
      </FormBox>
    </FormProvider>
  )
}

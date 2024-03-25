import { produce } from 'immer'
import { createContext, ReactNode, useEffect, useState } from 'react'

import { Coffee } from '../interfaces/Coffe'

export interface CartItems extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItems[]
  addCoffeeInCart: (coffee: CartItems) => void
  cartQuantityItems: number
  updateQuantityInCartItems: (
    coffee: CartItems,
    type: 'increase' | 'decrease',
  ) => void
  totalPriceInCartItems: number
  removeCoffeeInCartItems: (coffee: CartItems) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_CART_ITEMS = 'coffeeshop:cart_items'

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItems[]>(() => {
    const storedItems = localStorage.getItem(COFFEE_CART_ITEMS)
    if (storedItems) {
      return JSON.parse(storedItems)
    } else {
      return []
    }
  })

  const cartQuantityItems = cartItems.length

  const removeCoffeeInCartItems = (coffee: CartItems) => {
    const coffeeAlreadyExistsInCartItems = cartItems.findIndex(
      (items) => items.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCartItems >= 0) {
        draft.splice(coffeeAlreadyExistsInCartItems, 1)
      }
    })
    setCartItems(newCart)
  }

  const totalPriceInCartItems = cartItems.reduce((total, items) => {
    return total + items.price * items.quantity
  }, 0)

  const updateQuantityInCartItems = (
    coffee: CartItems,
    type: 'increase' | 'decrease',
  ) => {
    const coffeeAlreadyExistsInCartItems = cartItems.findIndex(
      (items) => items.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCartItems >= 0) {
        if (type === 'increase') {
          draft[coffeeAlreadyExistsInCartItems].quantity = coffee.quantity + 1
        }
        if (type === 'decrease') {
          draft[coffeeAlreadyExistsInCartItems].quantity = coffee.quantity - 1
        }
      }
    })
    setCartItems(newCart)
  }

  const addCoffeeInCart = (coffee: CartItems) => {
    const coffeeAlreadyExistsInCartItems = cartItems.findIndex(
      (items) => items.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCartItems < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCartItems].quantity += coffee.quantity
      }
    })
    setCartItems(newCart)
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_CART_ITEMS, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeInCart,
        cartQuantityItems,
        updateQuantityInCartItems,
        totalPriceInCartItems,
        removeCoffeeInCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

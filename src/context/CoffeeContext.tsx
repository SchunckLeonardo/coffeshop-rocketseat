import { createContext, ReactNode, useState } from 'react'

import { coffees } from '../utils/coffee-data'

interface CoffeeContextProps {
  children: ReactNode
}

interface Coffee {
  name: string
  image: string
  price: number
  description: string
  tags: string[]
  qnt: number
}

interface CoffeeContextType {
  coffeesCart: Coffee[]
  addCoffeeInCart: (id: number, qnt: number) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({ children }: CoffeeContextProps) {
  const [coffeesCart, setCoffesCart] = useState<Coffee[]>([])

  const addCoffeeInCart = (id: number, qnt: number) => {
    const coffee = coffees[id]
    coffee.qnt = qnt
    setCoffesCart((state) => [...state, coffee])
  }

  return (
    <CoffeeContext.Provider value={{ coffeesCart, addCoffeeInCart }}>
      {children}
    </CoffeeContext.Provider>
  )
}

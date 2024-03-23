import { Route, Routes } from 'react-router-dom'

import { Checkout } from './screens/Checkout'
import { Home } from './screens/Home'
import { DefaultLayout } from './screens/layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

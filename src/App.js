import { useState } from 'react'
import Header from './components/Layouts/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const cartShown = () => {
    setCartIsShown(true)
  }

  const cartHidden = () => {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClick={cartHidden} />}
      <Header onCartShow={cartShown} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App

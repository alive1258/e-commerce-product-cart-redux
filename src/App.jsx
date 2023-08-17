import { useState } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Header from './components/Header'
import HomePage from './components/HomePage'
import CartPage from './components/CartPage'
import './output.css'

function App() {
  const [isCartPage, setIsCartPage] = useState(false)

  return (
    <Provider store={store}>
      <Header setIsCartPage={setIsCartPage} />
      <main>
        {!isCartPage ? <HomePage /> : <CartPage />}
      </main>

    </Provider>
  )
}


export default App

import './App.css'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import CartContainer from './components/CartContainer.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer saludo='Bienvenidos a Digiteca' />} />
            <Route path='/category/:categoryName' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </CartProvider>

      </BrowserRouter>
    </>
  )
}

export default App

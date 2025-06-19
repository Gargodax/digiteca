import './App.css'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
// import ItemDetail from './components/ItemDetail.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Item from './components/Item.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer saludo='Bienvenidos a Digiteca' />} />
          <Route path='/category/:categoryId' element={<ItemListContainer saludo='Categoría: ' />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

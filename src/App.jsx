import './App.css'
import NavBar from './components/NavBar.jsx'
import CartWidget from './components/CartWidget.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
function App() {

  return (
    <>

      <NavBar />
      <ItemListContainer saludo='Bienvenidos a la tienda' />

    </>
  )
}

export default App

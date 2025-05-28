import '../css/NavBar.css'
import '../css/CartWidget.css'
import CartWidget from './CartWidget.jsx'

const NavBar = () => {
    return (
        <nav className="nav-container">
            <a className="nav-link" href="">Home</a>
            <a className="nav-link" href="">Clásicos</a>
            <a className="nav-link" href="">Ofertas</a>
            <a className="nav-link" href="">Mas vendidos</a>

            <CartWidget />
        </nav>
    )
}

export default NavBar;
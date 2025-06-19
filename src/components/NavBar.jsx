import '../css/NavBar.css'
import '../css/CartWidget.css'
import '../css/HomeLogo.css'
import HomeLogo from './HomeLogo.jsx'
import CartWidget from './CartWidget.jsx'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="nav-container">
            <NavLink className="nav-link" to="/"><HomeLogo /></NavLink>
            <NavLink className="nav-link" to="/category/clasicos">Clásicos</NavLink>
            <NavLink className="nav-link" to="/category/">Categorías</NavLink>
            
            <CartWidget />
        </nav>
    )
}

export default NavBar;
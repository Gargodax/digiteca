import '../css/NavBar.css'
import '../css/CartWidget.css'
import '../css/HomeLogo.css'
import HomeLogo from './HomeLogo.jsx'
import CategoryDropdown from './CategoryDropdown.jsx'
import CartWidget from './CartWidget.jsx'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="nav-container">
            <div className='home-logo-container'>
                <Link className="nav-link" to="/"><HomeLogo /></Link>
            </div>
            <div className='nav-links-container'>
                <CategoryDropdown />
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;
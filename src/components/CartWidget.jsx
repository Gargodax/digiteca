import '../css/CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { useLocation } from "react-router-dom";


const CartWidget = () => {
    const { getItemCount } = useContext(CartContext);
    const itemCount = getItemCount();
    const cartPath = useLocation().pathname === '/cart';

    return (
        <>
            <span className="cart-widget-container">
                <img src="/src/assets/images/icon-cart.svg" alt="Carrito de compras" />

                {/* En la página del carrito NO se mostrará la insignia con la cantidad de ítems agregados */}

                {!cartPath ? <span className='badget'> {itemCount} </span> : ''}

            </span>
        </>
    )
}

export default CartWidget;
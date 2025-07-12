import '../css/CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

const CartWidget = () => {
    const { getItemCount } = useContext(CartContext);
    const itemCount = getItemCount();
    console.log(itemCount);
    

    return (
        <span className="cart-widget-container">
            <img src="/src/assets/images/icon-cart.svg" alt="Carrito de compras" />
        </span>

    )
}

export default CartWidget;
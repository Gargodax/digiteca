import { useContext } from "react"
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const CartContainer = () => {
    // Consumir contexto del carrito de compras
    const { cart } = useContext(CartContext);
    
    // Verificar si el carrito está vacío
    if (cart.length === 0) {
        return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2>Tu carrito está vacío</h2>
            <Link to='/' className="home" >Volver a Home</Link>
        </div>
        );
    }
    
    // Si el carrito no está vacío, mostrar los items del carrito
    return (
        <Cart />
    );

}

export default CartContainer

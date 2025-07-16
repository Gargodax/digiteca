import { useContext } from "react"
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import '../css/Cart.css';

const Cart = () => {
  // Consumir contexto del carrito de compras
  const { cart, clearCart, getItemCount, getTotalPrice } = useContext(CartContext);
  const plural = getItemCount() > 1 ? 'ítems' : 'ítem';
  return (
    <>
      <h2 >Verifica el carrito</h2>
      <div className="list-container">
        <div>
          <ul className="item-list" >
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
        <li className="total-price-container" >
          <h4>Total a pagar: ${getTotalPrice()} ({getItemCount()} {plural}) </h4>
        </li>
      </div>
      <div className="btn-area" >
        <Link to='/' className="home" >
          <button className="home-btn" >Volver a Home</button>
        </Link>
        <Link to='/checkout'>
          <button className="buy" >Comprar</button>
        </Link>
        <button className="clear-cart" onClick={clearCart} >Vaciar carrito</button>
      </div>
    </>
  );
}

export default Cart

import { useContext } from "react"
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  // Consumir contexto del carrito de compras
  const { cart, clearCart, getItemCount, getTotalPrice } = useContext(CartContext);

  return (
    <>
      <h2>Tu carrito de compras</h2>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'row' }}>
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
        <p>Total a pagar: ${getTotalPrice()}</p>
        <button onClick={clearCart} style={{ margin: '10px', padding: '10px 20px', backgroundColor: 'lightcoral', color: 'white', border: 'none', borderRadius: '5px' }}>Vaciar carrito</button>
        <Link to='/' className="home" >
          <button style={{ margin: '10px', padding: '10px 20px', backgroundColor: 'lightsteelblue', color: 'black', border: 'none', borderRadius: '5px' }}>Volver a Home</button>
        </Link>
      </div>
    </>
  );
}

export default Cart

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import '../css/CartItem.css'

// Componente CartItem que representa un item en el carrito
const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  // const totalPrice = (item.price * item.quantity).toFixed(2);

  return (
    <li key={item.id} className="item">
      <div className="info-container" >
        <div>
          <img src={item.image} alt={item.title} style={{ width: '5em' }} />
        </div>
        <div style={{ maxWidth: '20em' }}>
          <p style={{ textAlign: 'start' }}>Título: {item.title}</p>
          <p style={{ textAlign: 'start' }}>Autor: {item.author}</p>
        </div>
      </div>
      <div className="quantity-container" >
        <p style={{ fontSize: '1.2em', fontWeight: '400' }} >{item.quantity} x ${item.price}</p>
        <button style={{ padding: '.5em', backgroundColor: 'lightcoral' }} onClick={() => removeItem(item.id)}>Quitar</button>
      </div>
    </li>
  );
}

export default CartItem

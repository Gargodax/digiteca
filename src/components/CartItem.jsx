import React from 'react'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

// Componente CartItem que representa un item en el carrito
const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <li key={item.id} style={{ margin: '10px 0' }}>
      <h3>{item.title}</h3>
      <p>Autor: {item.author}</p>
      <p>Cantidad: {item.quantity}</p>
      <p>Precio unitario: ${item.price}</p>
      <p>Total: ${item.price * item.quantity}</p>
      <button onClick={() => removeItem(item.id)}>Eliminar</button>
    </li>
  );
}

export default CartItem

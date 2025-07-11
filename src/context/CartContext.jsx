import { createContext, useState } from 'react';

// Contexto del carrito de compras
export const CartContext = createContext();

// provider del contexto del carrito de compras
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // Estado del carrito

    // datos + lógica del carrito de compras

    // agregar item al carrito
    const addItem = (item, quantity) => {
        // Verificar si el item ya está en el carrito
        if (isInCart(item.id)) {
            // Si ya está, actualizar la cantidad
            setCart(cart.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
            ));
        } else {
            // Si no está, agregarlo al carrito
            setCart([...cart, { ...item, quantity }]);
        }

    }

    // eliminar item del carrito
    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));

    }

    // Borrar todo el carrito
    const clearCart = () => {
        setCart([]);
    }

    // Verificar si un item ya está en el carrito
    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    }

    // cantidad de items en el carrito
    const getItemCount = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    }

    // total a pagar
    const getTotalPrice = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }

    console.log(cart);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, getItemCount, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;
import React, { useState } from 'react';
import '../css/ItemCount.css';

const ItemCount = ({onAdd}) => {
    const [count, setCount] = useState(1);
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }
    const handleDecrement = () => {
        setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
    };

    const handleAddToCart = () => {
        onAdd(count);
    };

    return (
        <div className='adder-container'>
            <div className="item-count">
                <button className='adder-btn' onClick={handleDecrement}>-</button>
                <span>{count}</span>
                <button className='adder-btn' onClick={handleIncrement}>+</button>
            </div>
            <button className='addToCart-btn' onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount

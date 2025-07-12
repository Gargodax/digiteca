import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";


const ItemDetail = ({ item }) => {

    //consumir contexto del carrito de compras
    const { addItem } = useContext(CartContext);

    // Verificar si se realizó compra
    const [purchase, setPurchase] = useState(false);

    const onAdd = (quantity) => {
        addItem(item, quantity);
        setPurchase(true);
    };

    // Desestructuración del objeto item
    const { title, author, price, description, category, stock, image } = item;

    if (!item) {
        return <p>Loading...</p>;
    }
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', width: '300px', margin: '20px auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>{title}</h2>
            <img src={image} alt={title} style={{ width: '200px', height: '300px' }} />
            <hr style={{ width: '100%', marginTop: '.5em', marginBottom: '.5em' }} />
            <p>Autor: {author}</p>
            <p>Categoría: {category}</p>
            <p>Descripción: {description}</p>
            <p>Precio: ${price}</p>
            <p>Stock: {stock} u.</p>
            <br />

            {purchase ?
                <>
                    <p style={{ width: '100%', color: 'red', fontSize: '1.2em', fontWeight: 'bold' }}>¡Gracias!</p>
                    <Link to={'/cart'} style={{ width: '100%' }}>
                        <button style={{ width: '90%', margin: '.5em', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: 'lightsteelblue' }}>Ver carrito</button>
                    </Link></>
                : <ItemCount stockLimit={stock} onAdd={onAdd} />}


            <Link to='/' className="home" >Volver a Home</Link>
        </div>
    );
}
export default ItemDetail;
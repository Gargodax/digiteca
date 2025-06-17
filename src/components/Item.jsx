import { Link } from "react-router-dom";
const Item = ({ book }) => {
    // Destrucuturación del objeto book
    const { id, title, author, price, category, image } = book;
    return (
        <li key={id} style={{ border: '1px solid #ccc', padding: '10px', width: '20%', height: '220px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
            <div style={{ margin: '10px', textAlign: 'center', width: '30%' }}>
                <h3>{title}</h3>
                <img src={image} alt={title} style={{ width: '100px', height: '150px' }} />
            </div>
            <div>
                <div>
                    <p>Autor: {author}</p>
                    <p>Categoría: {category}</p>
                    <p>Precio: ${price}</p>
                </div>
                <Link to={`/item/${id}`} style={{ display: 'block' }}>Ver detalles</Link>
                <button>Agregar al carrito</button>
            </div>

        </li>
    );
}

export default Item;

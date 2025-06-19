import { Link } from "react-router-dom";
const Item = ({ book }) => {
    // Desestrucuturación del objeto book
    const { id, title, author, price, category, image } = book;
    return (
        <li key={id} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', width: '300px', height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3>{title}</h3>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', justifyContent: 'space-between', width: '100%' }}>
                <img src={image} alt={title} style={{ maxWidth: '60%', height: '150px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <p>Autor: {author}</p>
                    <p>Precio: ${price}</p>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '100%' }}>
                <Link to={`/item/${id}`} style={{ display: 'block' }} state={{ book }}>
                    Ver detalles
                </Link>
                <button>Agregar al carrito</button>
            </div>

        </li >
    );
}

export default Item;

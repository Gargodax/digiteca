import { Link } from "react-router-dom";
import '../css/Item.css';
const Item = ({ book }) => {
    // Desestrucuturación del objeto book
    const { id, title, author, price, image } = book;
    return (
        <li key={id} style={{ backgroundColor: 'azure' }} >
            <h3>{title}</h3>
            <div className="info">
                <img src={image} alt={title} />
                <div>
                    <p>Autor: {author}</p>
                    <p>Precio: ${price}</p>
                </div>
            </div>
            <div className="cta-area">
                <Link to={`/item/${id}`} style={{ display: 'block', width: '100%', textAlign: 'center' }} state={{ book }}>
                    Ver detalles
                </Link>
            </div>

        </li >
    );
}

export default Item;

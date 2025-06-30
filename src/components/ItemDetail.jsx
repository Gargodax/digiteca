import { Link } from "react-router-dom";
const ItemDetail = ({ item }) => {
    // Desestructuración del objeto item
    const { title, author, price, description, category, image } = item;

    if (!item) {
        return <p>Loading...</p>;
    }
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', width: '300px', margin: '20px auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>{title}</h2>
            <img src={image} alt={title} style={{ width: '200px', height: '300px' }} />
            <p>Autor: {author}</p>
            <p>Categoría: {category}</p>
            <p>Descripción: {description}</p>
            <p>Precio: ${price}</p>
            <button style={{ display: 'block' }}>Agregar al carrito</button>
            <Link to='/'>Volver a Home</Link>
        </div>
    );
}
export default ItemDetail;
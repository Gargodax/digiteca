import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
const ItemListContainer = (props) => {

    const [books, setBooks] = useState([]);
    const { categoryName } = useParams();
    const { data, loading, error } = useFetch('/data/fakeBooks.json');

    useEffect(() => {
        if (data) {
            // Si hay un categoryName en los parámetros de la URL, filtrar los libros por esa categoría

            if (!categoryName || categoryName === 'todas las caftegorías') {
                setBooks(data);
            }
            else {
                const filteredBooks = data.filter(book => book.category.toLowerCase() === categoryName.toLowerCase());
                setBooks(filteredBooks);
            }

            // Si categoryName es 'todas las categorías', mostrar todos los libros
            if (categoryName && categoryName.toLowerCase() === 'todas las categorías') {
                setBooks(data);
            }

        }
    }, [data, categoryName]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div style={{ textAlign: 'center', margin: '20px' }}>
                <h1>{categoryName}</h1>
            </div>
            <ItemList data={books} />
        </>
    )

}

export default ItemListContainer;
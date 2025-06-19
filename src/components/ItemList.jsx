import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch.jsx";
import Item from "./Item.jsx";

const ItemList = () => {
    const [books, setBooks] = useState([]);
    const { data, loading, error } = useFetch('/data/fakeBooks.json');

    useEffect(() => {
        if (data) {
            setBooks(data);
        }
    }, [data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2 style={{ margin: '1em' }}>Lista de libros</h2>
            <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {books.map((book) => <Item key={book.id} book={book} />

                )}
            </ul>
        </div>
    );
}

export default ItemList;
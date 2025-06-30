import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [book, setBook] = useState(null);
    const { id } = useParams();
    const { data, loading, error } = useFetch('/data/fakeBooks.json');

    useEffect(() => {
        if (data) {
            const foundBook = data.find((item) => item.id === parseInt(id));
            setBook(foundBook);
        }
    }, [data, id]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar el libro: {error}</p>;
    if (!book) return <p>Libro no encontrado.</p>;

    return (
        <>
            <div style={{ textAlign: 'center', margin: '20px' }}>
                <ItemDetail item={book} />
            </div>
        </>
    )

}

export default ItemDetailContainer;
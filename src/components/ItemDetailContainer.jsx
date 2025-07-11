import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ItemDetail from "./ItemDetail";
import LoaderComponent from "./LoaderComponent";

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

    if (loading) return <LoaderComponent />;
    if (error) return <h4 style={{ padding:'1em', margin: '1em', fontSize:'1.5em',textAlign: 'center' }}>Error al cargar el libro: {error}</h4>;
    if (!book) return <h4 style={{ padding:'1em', margin: '1em', fontSize:'1.5em',textAlign: 'center' }}>Libro no encontrado.</h4>;

    return (
        <>
            <div style={{ textAlign: 'center', margin: '20px' }}>
                <ItemDetail item={book} />
            </div>
            
        </>
    )

}

export default ItemDetailContainer;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import LoaderComponent from "./LoaderComponent";
import { collection, doc, getDoc } from "firebase/firestore";
import { dataBase } from "../service/firebase.jsx";
import ErrorPage from "./ErrorPage";

const ItemDetailContainer = () => {

    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const { id } = useParams();

    //Firebase
    useEffect(() => {
        // Encender loader
        setLoading(true);
        // Conexión con la colección de Firebase
        const booksCollection = collection(dataBase, 'books');
        // Crear referencia
        const docRef = doc(booksCollection, id);
        // Solicitud del documento
        getDoc(docRef)
            .then((res) => {
                if (res.data()) {
                    setBook({ id: res.id, ...res.data() });
                } else {
                    setInvalid(true);
                }
            })
            .catch((error) =>
                console.error("Error fetching book: ", error))
            .finally(() => {
                // Apagar loader
                setLoading(false);
            })
    }, [])

    return (
        <>

            {loading ?
                <LoaderComponent />
                : invalid ?
                    <ErrorPage message="Libro no encontrado" />
                    : <div style={{ textAlign: 'center', margin: '20px' }}>
                        <ItemDetail item={book} />
                    </div>
            }
        </>
    )

}

export default ItemDetailContainer;
import { useState, useEffect } from 'react';
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';
import { collection, getDocs, addDoc, query, where } from 'firebase/firestore';
import { dataBase } from '../service/firebase.jsx';


const ItemListContainer = (props) => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const { categoryName } = useParams();

    // Firebase
    useEffect(() => {
        // Encender Loader
        setLoading(true);

        //Conexión con la colección de Firebase
        const booksCollection = categoryName && categoryName !== 'todas las categorías'
            ? query(collection(dataBase, 'books'), where("category", "==", categoryName))
            : collection(dataBase, 'books')
        // Solicitud de los datos
        getDocs(booksCollection)
            .then((res) => {
                // Limpiar los datos y convertirlos a un array
                const list = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    };
                });
                setBooks(list);
            })
            .catch((error) =>
                console.error("Error fetching books: ", error))
            .finally(() => {
                // Apagar Loader
                setLoading(false);
            })

    }, [categoryName]);

    return (
        <>
            {loading ?
                <LoaderComponent /> :
                <div>
                    <div style={{ textAlign: 'center', margin: '20px' }}>
                        <h1>{categoryName ? categoryName : props.saludo}</h1>
                    </div>
                    <ItemList data={books} />
                </div>


            }
        </>
    )

}

export default ItemListContainer;
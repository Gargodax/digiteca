import { useLocation } from "react-router-dom";
import ItemDetail from "./ItemDetail";
const ItemDetailContainer = () => {
    const location = useLocation();
    const { book } = location.state || {};

    return (
        <>
            <div style={{ textAlign: 'center', margin: '20px' }}>
                <ItemDetail item={book} />
            </div>
        </>
    )

}

export default ItemDetailContainer;
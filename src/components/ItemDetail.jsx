import Item from "./Item";
import { Link } from "react-router-dom";
const ItemDetail = ({ item }) => {
    return (
        <div className="item-detail">
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
            <p>Author: {item.author}</p>
            <p>Price: ${item.price}</p>
            <p>{item.description}</p>
            <p>Category: {item.category}</p>

        </div>
    );
}

export default ItemDetail;
import ItemList from "./ItemList";
const ItemListContainer = (props) => {
    return (
        <>
            <div style={{ textAlign: 'center', margin: '20px' }}>
                <h1>{props.saludo}</h1>
            </div>
            <ItemList />
        </>
    )

}

export default ItemListContainer;
import Item from "./Item.jsx";

const ItemList = ({ data }) => {

    // Si data es undefined o no tiene elementos, se mostrará mensaje correspondiente
    if (!data || data.length === 0) {
        return <h4 style={{ padding:'1em', margin: '1em', fontSize:'1.5em',textAlign: 'center' }}>No hay libros disponibles.</h4>;
    }

    return (
        <div>
            <h2 style={{ margin: '1em' }}>Lista de libros</h2>
            <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {data.map((book) => <Item key={book.id} book={book} />

                )}
            </ul>
        </div>
    );
}

export default ItemList;
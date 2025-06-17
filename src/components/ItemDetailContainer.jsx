import React, { useEffect, useState } from 'react';


const ItemDetailContainer = () => {
    useEffect(() => {

        console.log("Cargando detalles del libro...");
    }, []);
    
    return (
        <div>
            <h2>Detalle del libro</h2>
            <p>Detalles del libro seleccionado.</p>
        </div>
    );


}

export default ItemDetailContainer;
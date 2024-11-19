import React from 'react';
import '../App.css';

const ItemListContainer = (props) => {
    return (
        <div className="container">
            <h2>{props.greeting}</h2>
            <p>Bienvenido a nuestra tienda online. ¡Explora nuestros productos!</p>
        </div>
    );
};

export default ItemListContainer;             
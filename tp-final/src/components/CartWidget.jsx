import React, { useState } from "react";

const CartWidget = () => {
    const [itemsInCart, setItemsInCart] = useState(0); // Inicializar con 0 items

    return (
        <div className="cart-widget">
            <span className="cart-text">Carrito</span>
            <div className="cart-count">
                {itemsInCart}
            </div>
        </div>
    );
};


export default CartWidget
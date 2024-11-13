import React from "react";

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <span className="cart-text">Carrito</span>
            <div className="cart-count">
                {itemsInCart}

            </div>
        </div>
    )
}

export default CartWidget
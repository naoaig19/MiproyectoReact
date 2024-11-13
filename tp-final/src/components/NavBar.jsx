import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <img src="logo.png" alt="Logo de tienda" />
            </div>
            <ul className="nav-links">
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>

            </ul>
            <CartWidget />

        </nav>
    )
}
export default NavBar;

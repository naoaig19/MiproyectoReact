import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';  // Ruta relativa desde App.js


const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Hola, bienvenido a Mi Tienda!" />
    </div>
  );
};

export default App;
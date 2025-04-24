import React from 'react';
import './Filtros.css';

function Filtros() {
    return (
      <div className="filtros">
        <button className="filtro-boton">Todas</button>
        <button className="filtro-boton">Completadas</button>
        <button className="filtro-boton">Pendientes</button>
        <button className="filtro-boton-limpiar">Eliminar Completadas</button>
      </div>
    );
  }
  
  export default Filtros;
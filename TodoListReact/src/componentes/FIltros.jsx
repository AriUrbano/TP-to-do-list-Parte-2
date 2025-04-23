import React from 'react'
import './Filtros.css'
function Filtros() {
    return (
      <div>
        <button class="button elimnar u-full-width">Todas</button>
        <button class="button elimnar u-full-width">Completadas</button>
        <button class="button elimnar u-full-width">Pendientes</button>
        <button class="button elimnar u-full-width">Eliminar Completadas</button>
      </div>
    );
  }
  
  export default Filtros;
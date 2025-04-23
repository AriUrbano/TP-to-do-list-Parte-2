import React from 'react'

function Tarea(tarea) {
    return (
      <div>
        <h2>{tarea.nombre}</h2>
        <p>Creada: {tarea.dia} {tarea.hora}</p> 
        <p>Estado: {tarea.estado}</p> 
        <button class="button elimnar u-full-width">Eliminar ×</button>
      </div>
    );
  }

export default Tarea;
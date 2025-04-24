import React from 'react';
import './Tarea.css';

function Tarea({ nombre, dia, hora, estado }) {
  return (
    <div className='tarea'>
      <h2 className="tarea-nombre">{nombre}</h2>
      <p className="tarea-fecha">Creada: {dia} {hora}</p>
      <p className="tarea-estado">Estado: {estado}</p>
      <button className="tarea-boton-eliminar">Eliminar ×</button>
    </div>
  );
}

export default Tarea;
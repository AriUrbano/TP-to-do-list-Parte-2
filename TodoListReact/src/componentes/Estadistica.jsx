import React from 'react';
import './Estadistica.css';

function Estadistica({ nombre, duracion }) {
  return (
    <div className="estadistica">
      <p className="estadistica-texto">Tarea más rápida completada: {nombre} {duracion}</p>
    </div>
  );
}

export default Estadistica;
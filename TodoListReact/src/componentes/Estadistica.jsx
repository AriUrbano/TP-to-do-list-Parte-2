import React from 'react';
import './Estadistica.css';
function Estadistica(tarea) 
{
    return (
        <div className="estadistica">
        <p className="estadistica-texto">Tarea más rápida completada: {tarea.nombre} {tarea.duracion}</p>
      </div>
    );
}
export default Estadistica;
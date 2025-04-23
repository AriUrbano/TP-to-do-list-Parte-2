import React from 'react'
import './Estadistica.css'
function Estadistica(tarea) 
{
    return (
        <div>
        <p>Tarea mas rapida completada: {tarea.dia} {tarea.duracion}</p> 
        </div>
    );
}
export default Estadistica;
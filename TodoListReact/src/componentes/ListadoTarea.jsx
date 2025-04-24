import React from 'react';
import Tarea from './Tarea';
import Estadistica from './Estadistica';
import './ListadoTareas.css';


function ListadoTarea() {
  return (
    <div className="listado-tareas">
    <Tarea className="pendiente" nombre="EFSI" dia="23/4/2025" hora="8:50:22" estado="Pendiente" />
    <Tarea className="completa" nombre="Matematica" dia="2/5/2025" hora="9:64:42" estado="Completa" />
    <Estadistica nombre="EFSI" duracion="1m" />
  </div>
  );
}

export default ListadoTarea;
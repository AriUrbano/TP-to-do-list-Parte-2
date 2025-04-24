import React from 'react';
import './FormularioTarea.css';

function FormularioTarea() {
    return (
      <div className="formulario-tarea">
        <h2 className="formulario-titulo">Agregar nueva tarea</h2>
        <form className="formulario">
          <label className="formulario-etiqueta">Nombre de la tarea</label>
          <input className="formulario-input" type='text'/>
          <button className="formulario-boton" type="submit">Agregar Tarea</button>
        </form>
      </div>
    );
  }
  
  export default FormularioTarea;
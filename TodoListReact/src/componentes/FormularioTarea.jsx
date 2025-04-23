import React from 'react'

function FormularioTarea() {
    return (
      <div>
        <h2>Agregar nueva tarea </h2>
        <form>
          <label>Nombre de la tarea</label>
          <input type='text'/>
          <button type="submit">Agregar Tarea</button>
        </form>
      </div>
    );
  }
  
  export default FormularioTarea;
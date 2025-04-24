import React from 'react';
import FormularioTarea from './FormularioTarea';
import Filtros from './Fltros';
import ListadoTarea from './ListadoTarea';
import Estadistica from './Estadistica';


function TodoList() 
{
    return (
        <div className='container'>
            <FormularioTarea/>
            <Filtros/>
            <ListadoTarea/>
            <Estadistica/>
        </div>
    );
}
export default TodoList;
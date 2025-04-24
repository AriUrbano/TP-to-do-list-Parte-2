import React from 'react';
import './App.css';
import FormularioTarea from './componentes/FormularioTarea';
import ListadoTarea from './componentes/ListadoTarea';
import Filtros from './componentes/FIltros';


function App() {
  return (
    <>
    <FormularioTarea/>
    <Filtros/>
    <ListadoTarea/>
    </>
  )
}

export default App

import React, { useState, useEffect } from 'react';
import FormularioTarea from './FormularioTarea';
import Filtros from './Filtros';
import ListadoTareas from './ListadoTarea';
import './TodoList.css';

function TodoList() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState('todas');
  const [tareaMasRapida, setTareaMasRapida] = useState(null);

  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    setTareas(tareasGuardadas);
    calcularTareaMasRapida(tareasGuardadas);
  }, []);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
    calcularTareaMasRapida(tareas);
  }, [tareas]);

  const agregarTarea = (nombreTarea) => {
    const nuevaTarea = {
      id: Date.now(),
      nombre: nombreTarea,
      fechaCreacion: new Date(),
      completada: false,
      fechaCompletada: null
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const toggleCompletada = (id) => {
    setTareas(tareas.map(tarea => {
      if (tarea.id === id) {
        return {
          ...tarea,
          completada: !tarea.completada,
          fechaCompletada: tarea.completada ? null : new Date()
        };
      }
      return tarea;
    }));
  };

  const eliminarCompletadas = () => {
    setTareas(tareas.filter(tarea => !tarea.completada));
  };

  const calcularTareaMasRapida = (tareasList) => {
    const completadas = tareasList.filter(t => t.completada && t.fechaCreacion && t.fechaCompletada);
    if (completadas.length === 0) {
      setTareaMasRapida(null);
      return;
    }

    const tareaRapida = completadas.reduce((rapida, actual) => {
      const tiempoRapida = rapida.fechaCompletada - rapida.fechaCreacion;
      const tiempoActual = actual.fechaCompletada - actual.fechaCreacion;
      return tiempoActual < tiempoRapida ? actual : rapida;
    }, completadas[0]);

    const duracion = Math.round((tareaRapida.fechaCompletada - tareaRapida.fechaCreacion) / 60000); 
    setTareaMasRapida({ nombre: tareaRapida.nombre, duracion: `${duracion}m` });
  };

  const tareasFiltradas = tareas.filter(tarea => {
    if (filtro === 'completadas') return tarea.completada;
    if (filtro === 'pendientes') return !tarea.completada;
    return true;
  });

  return (
    <div className='container'>
      <h1>Lista de Tareas</h1>
      <FormularioTarea onAgregarTarea={agregarTarea} />
      <Filtros 
        filtroActual={filtro}
        onCambiarFiltro={setFiltro}
        onEliminarCompletadas={eliminarCompletadas}
      />
      <ListadoTareas 
        tareas={tareasFiltradas}
        onToggleCompletada={toggleCompletada}
        onEliminarTarea={eliminarTarea}
        tareaMasRapida={tareaMasRapida}
      />
    </div>
  );
}

export default TodoList;
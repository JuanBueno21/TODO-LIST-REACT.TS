import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const TodoApp = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [listaTareas, setlistaTareas] = useState<string[]>([]);



  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setlistaTareas(tareaAnterior => [...tareaAnterior, newTask])
    setNewTask("");
  };

  const handleBorrarTarea = (index: number) => {
    setlistaTareas(tareas => tareas.filter((_, i) => i !== index))
  }

  return (
    <div>TodoApp
      <h1>Lista de tareas</h1>
      <div className="flex">
        <input type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Agregar tarea..." />
        <button onClick={handleAddTask}>Agregar</button>
      </div>
      <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea} ></ListaTareas>
    </div>
  )
}
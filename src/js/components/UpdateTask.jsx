import React from 'react'
import { useState, useEffect } from 'react'
import { getTasks, postTask, eraseTask, updateTask } from '../Services/apiServices'

function UpdateTask() {
  const [nuevaTarea, setNuevaTarea] = useState("")
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Do laundry" },
    { id: 2, texto: "Grocery shopping" }])
  const [editandoTarea, setEditandoTarea] = useState(null)

  useEffect(() => {
    getTasks().then(data => setTareas(data))
  }, []);

  const addNewTask = () => {
    if (!nuevaTarea.trim()) return
    postTask(nuevaTarea).then(() => getTasks().then(data => setTareas(data)))
    setNuevaTarea("")
  }

  const saveTaskEdit = () => {
    if (!editandoTarea) return
    updateTask(editandoTarea.id, { label: editandoTarea.label, is_done: editandoTarea.is_done || false })
      .then(() => getTasks().then(data => setTareas(data)))
    setEditandoTarea(null)
  }

  const deleteTaskHandler = (id) => {
    eraseTask(id).then(() => getTasks().then(data => setTareas(data)))
  }

  return (
    <div>
      <h1 className="text-center mt-5"> Israel To-Do List</h1>
      <hr></hr>
      <p>Here you can modify or delete Israel's current tasks </p>
      <div className='papelContainer'>
        <button className="button-30 mb-3 mx-auto" role="button">Go back to Israel tasks</button>

        <input
          className="textoInput"
          type="text"
          placeholder="What needs to be done?"
          value={editandoTarea ? editandoTarea.label : nuevaTarea}
          onChange={(e) => {
            if (editandoTarea) setEditandoTarea({ ...editandoTarea, label: e.target.value })
            else setNuevaTarea(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (editandoTarea) saveTaskEdit()
              else addNewTask()
            }
          }}
        />

        <ul className="list-group">
          {tareas.map((tarea) => (
            <li className="list-group-item text-secondary tarea" key={tarea.id}>{tarea.label}
              <span>
                <button type="button" className="btn" onClick={() => setEditandoTarea(tarea)}></button>
                <button type="button" className="btn text-danger" onClick={() => deleteTaskHandler(tarea.id)}>x</button>
              </span>
            </li>
          ))}
        </ul>
        {tareas.length == 0 && (<p className="text-secondary mt-3"> No tasks left, Please add tasks.</p>)}
      </div>
    </div>
  )
}

export default UpdateTask

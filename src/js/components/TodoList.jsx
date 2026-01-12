import React from 'react'
import { useState, useEffect} from 'react'

function TodoList({volver}) {
const [nuevaTarea, setNuevaTarea] = useState("")
	const [tareas, setTareas] = useState([
		{id: 1,texto: "Do laundry"},
		 {id:  2,texto: "Grocery shopping"}])

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && nuevaTarea.trim() !== "") {
			const nueva = {
      		id: Date.now(),      
     		 texto: nuevaTarea.trim()
			}
			setTareas([...tareas, nueva]);
			setNuevaTarea("")

		}
	}

	const deleteTask = (id) => {
		const nuevasTareas = tareas.filter((tarea)=>tarea.id !== id); 
		setTareas(nuevasTareas)
		if(nuevaTarea.length == 0){
			console.log("No hay nuevas tareas");
			
		}
		
	}


	return (
		<div className="container text-center">


			<h1 className="text-center mt-5"> Israel To-Do List</h1>
			<h2>Agregar o editar tareas disponibles</h2>

			<div className="papelContainer">
			
		
			<button className="button-30 mb-3 mx-auto" role="button" onClick={volver}>Volver a mi usuario</button>
		

			
				<input className="textoInput" type="text" placeholder="What needs to be done?" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} onKeyDown={handleKeyDown} />
				
				<ul className="list-group">
					{tareas.map((tarea) => (
						<span>
						<li className="list-group-item text-secondary tarea" key={tarea.id}>{tarea.texto}
							<span>
							<button type="button" className="btn text-danger" onClick={()=> deleteTask(tarea.id)}>x</button></span></li>
							</span>
							
				
					))}
							
				</ul>
				{tareas.length == 0 && (<p className="text-secondary mt-3"> No tasks left, Please add tasks.</p>)}
		
				
			</div>
		</div>
	);
};

export default TodoList;

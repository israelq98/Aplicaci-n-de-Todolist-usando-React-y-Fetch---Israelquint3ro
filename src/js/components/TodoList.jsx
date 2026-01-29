import React from 'react'
import { useState, useEffect } from 'react'
import { getTasks, postUser, postTask, eraseTask, updateTask } from '../Services/apiServices';

function TodoList({ volver }) {
	const [nuevaTarea, setNuevaTarea] = useState([])
	const [tareas, setTareas] = useState([
		{ id: 1, texto: "Do laundry" },
		{ id: 2, texto: "Grocery shopping" }])
	console.log(tareas)



	useEffect(() => {
		getTasks().then(data => setTareas(data
		))
	}, []);





	const handleKeyDown = (e) => {
		if (e.key === "Enter" && nuevaTarea.trim() !== "") {

			postTask(nuevaTarea)
				.then(() => {
					return getTasks()
				})
				.then((datos) => {
					setTareas(datos),
						setNuevaTarea("")
				})
		}
	}


	const deleteTask = (id) => {
		const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
		eraseTask(id)
			.then(() => {
				return getTasks()
			})
			.then((data) => {
				setTareas(data)
			})
	}



	//  const modifyTask = (id,tarea) => {
	// 	const modifyTask = tareas.filter((tarea) => tarea.id !== id);
	// 	updateTask(id,tarea)
	// 	.then(()=>{
	// 		return getTasks()
	// 	})
	// 	.then((data)=>{
	// 		setTareas(data)
	// 	})

	// }

	const modifyTask = (tarea) => {
		const updatedTask = {
			label: nuevaTarea, 
			is_done: tarea.is_done 
		}

		updateTask(tarea.id, updatedTask)
			.then(() => getTasks())
			.then((data) => {
				setTareas(data)
				setNuevaTarea("")
			})
			.catch(err => console.log(err))
	}




	const returnToIsrael = () => {
		volver()
	};


	return (
		<div className="container text-center">


			<h1 className="text-center mt-5"> Israel To-Do List</h1>
			<hr></hr>
			<h2>Add or edit current tasks</h2>
			<p>Here you can modify or delete Israel's current tasks </p>

			<div className="papelContainer">


				<button className="button-30 mb-3 mx-auto" role="button" onClick={() => returnToIsrael()}>Back to my user</button>



				<input className="textoInput" type="text" placeholder="What needs to be done?" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} onKeyDown={handleKeyDown} />

				<ul className="list-group">
					{tareas.map((tarea) => (

						<li className="list-group-item text-secondary tarea" key={tarea.id}>{tarea.label}
							<span>
								{/* <button type='button' className='btn' onClick={() => modifyTask(tarea)}><i className="fa-solid fa-pen-to-square" style={{ color: " #2f3031" }}></i></button> */}
								<button type="button" className="btn text-danger" onClick={() => deleteTask(tarea.id)}>x</button>
							</span>
						</li>



					))}

				</ul>
				{tareas.length == 0 && (<p className="text-secondary mt-3"> No tasks left, Please add tasks.</p>)}


			</div>
		</div>

	);
};

export default TodoList;

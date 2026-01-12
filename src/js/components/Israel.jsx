import React, { useState, useEffect } from 'react'
import TodoList from './TodoList';

function Israel() {
    const [peticionesDatos, setPeticionesDatos] = useState([]);
    const [todoList,settodoList] = useState(false)



    const url_base = "https://playground.4geeks.com/todo"

    useEffect(() => {
        GetUsers()
    }, [])

 
 if (todoList) {
    return <TodoList volver={() => settodoList(false)} />;
  }


    // metodo GET
    const GetUsers = async () => {
        try {
            const response = await fetch(`${url_base}/users`);
            if (!response.ok) {
                throw new Error("No se pudieron obtener los datos")
               
            }
     
            const data = await response.json()
            setPeticionesDatos(data.users)
            return

        } catch (error) {
            console.log("Error", error)
        }

    }

    const existe = peticionesDatos.some((elemento) => elemento.name === "Israel")


    // metodo POST para crear usuario
    const crearUsuario = async () => {
        try {
            const response = await fetch(`${url_base}/users/"Israel"`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: {
                    "slug": "string",
                    "id": 0
                }});
         
           
            if (!response.ok) {
                throw new Error("Error al crear el usuario"),
                alert("Usuario creado correctamente")
                
                return
            }
  
        } catch (error) {
            console.log("Error")
        }

    }


    console.log(peticionesDatos)

    return (
        
        <div className='israel text-center mt-5'>
            <h1>Todo List App</h1>
            <hr/>
            <h1>Añadir tareas para mi usuario</h1>
            <p>(Haz click en el usuario para añadir o eliminar tareas)</p>
            <ul className='list-group' id='usuario'>
                <button className='list-group-item' id='usuarioIsrael' onClick={()=>settodoList(true) }>Israel</button>
            </ul>
            
        </div>
    )
}

export default Israel



const base_url = ('https://playground.4geeks.com/todo')

const user = ('Israel')


//1.  await fetch (url a la que vamos a trabajar, objeto con la informacion)
export const postUser = async () => {
    await fetch(`${base_url}/users/${user}`, {
        method: 'POST'

    })

}

export const getTasks = async () => {
    const response = await fetch(`${base_url}/users/${user}`)
    if (!response.ok) {
        await postUser()
        return []


    }
    const data = await  response.json()

    return data.todos || []
}


//Petición creando el usuario
export const postTask = async (id) => {
    const response = await fetch(`${base_url}/todos/${user}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                label:id,
                is_done:false
            })
        
        }
    )
            const data = await response.json()
            return data
}

export const eraseTask = async (taskid) => {
    const response = await fetch(`${base_url}/todos/${taskid}`, {
        method: 'DELETE'
    }
    )
     return response
}

export const updateTask = async (taskid, updatetask) => {
    await fetch(`${base_url}/todos/${taskid}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatetask)

    })
    return response.json()
}


console.log(updateTask)
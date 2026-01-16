

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
    const data = response.json()

    return data.todos
}


//Petición creando el usuario
export const postTask = async (newtask) => {
    await fetch(`${base_url}/todos/${user}`,
        {
            method: 'POST',
            hearders: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newtask)
        }
    )

}

export const EraseTask = async (taskid) => {
    await fetch(`${base_url}/todos/${taskid}`, {
        method: 'DELETE'
    }
    )
}

export const updateTask = async (taskid, updatedtask) => {
    await fetch(`${base_url}/todos/${taskid}`, {
        method: 'PUT',
        hearders: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newtask)

    })
}
import { api } from "./api"


export const getTodos = () => {
        return api.get("/todos")
}


export const getTodo = (id) => {
    return api.get("/todos"+id)
}

export const addTodo = (todo) => {
    return api.post("/todos",todo)
}

export const updateTodo = (todo) => {
    return api.put("/todos/"+todo.id,todo)
}

export const deleteApi = (id) => {
    return api.delete("/todos/"+id)
}

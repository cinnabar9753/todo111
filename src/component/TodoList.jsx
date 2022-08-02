import './ToDoList.css';
import TodoItem from './TodoItem'
import { useSelector } from "react-redux";
function TodoList() {
    const todos=useSelector(state=>state.todo.todos)
    return(
        todos.map(todo =>(
            <TodoItem key={todo.id} context={todo.context}></TodoItem>
        ))
    )
}

export default TodoList

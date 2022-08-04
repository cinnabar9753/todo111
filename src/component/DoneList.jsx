import './ToDoList.css';
import TodoItem from './TodoItem'
import { useSelector } from "react-redux";
function DoneList() {
    const todos=useSelector(state=>state.todo.todos)
    var newTodos = todos.filter((todo)=>{return todo.done === true})
    return(
        
        newTodos.map((todo,index) =>(
            <TodoItem key={todo.id} index={index} todo={todo}></TodoItem>
        ))
    )
}

export default DoneList

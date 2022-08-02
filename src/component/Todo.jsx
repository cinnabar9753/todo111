import TodoList from "./TodoList";
import "./Todo.css";
import TodoGenerator from "./TodoGenerator";
function Todo() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
      <TodoGenerator />
    </div>
  );
}

export default Todo;

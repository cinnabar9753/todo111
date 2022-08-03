import "./ToDoList.css";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getTodos } from "../apis/todoApi";
import { addTodos } from "./todoSlice";
import { useDispatch } from "react-redux";
function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos()
      .then((response) => {
        dispatch(addTodos(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return todos.map((todo, index) => (
    <TodoItem key={todo.id} index={index} todo={todo}></TodoItem>
  ));
}

export default TodoList;

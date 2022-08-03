import "./TodoItem.css";
import { useDispatch } from "react-redux";
import { doneTodo, deleteTodo } from "./todoSlice";
import { deleteApi, updateTodo } from "../apis/todoApi";
function TodoItem(props) {
  const dispatch = useDispatch();
  const { index, todo } = props;

  const toggleItem = () => {
    const newTodo = {
      id: todo.id,
      done: !todo.done,
    };
    updateTodo(newTodo)
      .then((response) => {
        dispatch(doneTodo(index));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (e) => {
    deleteApi(todo.id)
      .then((response) => {
        dispatch(deleteTodo(index));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <span
        className="item"
        style={
          todo.done
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
        onClick={toggleItem}
      >
        {todo.context}
      </span>
      <span className="delete-icon" onClick={handleDelete}>
        X
      </span>
    </div>
  );
}

export default TodoItem;

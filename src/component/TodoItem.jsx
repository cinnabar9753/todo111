import "./TodoItem.css";
import { useDispatch } from "react-redux";
import { doneTodo, deleteTodo,updateContext } from "./todoSlice";
import { deleteApi, updateTodo } from "../apis/todoApi";
import { CloseOutlined,EditOutlined } from "@ant-design/icons";
import { Modal,Input } from 'antd';
import React, { useState } from 'react';
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

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [context, setContext] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    const editTodo = {
      id: todo.id,
      done: todo.done,
      context,
      index
    };
    updateTodo(editTodo)
    .then((response) => {
      dispatch(updateContext(editTodo));
    })
    .catch((err) => {
      console.log(err);
    });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };  
  const handleContextChange = (e) => {
    setContext(e.target.value);
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
      <CloseOutlined onClick={handleDelete} ></CloseOutlined>
      <EditOutlined onClick={showModal} />
      <Modal title={"Edit id: "+todo.id} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Input placeholder={context} onChange={handleContextChange} />
      </Modal>

    </div>
  );
}

export default TodoItem;

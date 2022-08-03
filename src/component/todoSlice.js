import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  todos: [
    // {
    //   id: v4(),
    //   context: "Learn Redux",
    //   done: false,
    // },
  ],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    },

    doneTodo: (state, action) => {
      state.todos[action.payload].done = !state.todos[action.payload].done;
    },

    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
    addTodos: (state, action) =>{
      state.todos = action.payload
    },
    updateContext: (state, action) =>{
      state.todos[action.payload.index].context=action.payload.context
    }
  },
});

export default todoSlice.reducer;
export const { add, doneTodo, deleteTodo,addTodos,updateContext } = todoSlice.actions;

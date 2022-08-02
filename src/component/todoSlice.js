import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  todos: [
    {
      id: v4(),
      context: "Learn Redux",
      done: false,
    },
  ],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add(state, adction) {
      state.todos.push({
        id: v4(),
        ...adction.payload,
      });
    },
  },
});

export default todoSlice.reducer;
export const {add} = todoSlice.actions;

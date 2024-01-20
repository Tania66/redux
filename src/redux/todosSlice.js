import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',

  initialState: { items: [] },

  reducers: {
    addTodo(state, { payload }) {
      state.items.push(payload);
    },
    deleteTodo(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;

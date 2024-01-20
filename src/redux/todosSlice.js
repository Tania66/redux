import { createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, getTodos } from './operations';

const todosSlice = createSlice({
  name: 'todos',

  initialState: { items: [], isLoading: false, error: null },

  extraReducers: builder => {
    builder
      .addCase(getTodos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getTodos.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })

      .addCase(getTodos.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(addTodo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })

      .addCase(deleteTodo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== payload);
      });
  },
});

export const todosReducer = todosSlice.reducer;

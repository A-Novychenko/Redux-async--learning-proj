import { createSlice } from '@reduxjs/toolkit';
import {
  getAllTasks,
  addTask,
  deleteTask,
  toggleCompleted,
  // deleteAll,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [getAllTasks.pending]: handlePending,
    [addTask.pending]: handlePending,
    [deleteTask.pending]: handlePending,
    [toggleCompleted.pending]: handlePending,
    // [deleteAll.pending]: handlePending,

    [getAllTasks.rejected]: handleRejected,
    [addTask.rejected]: handleRejected,
    [deleteTask.rejected]: handleRejected,
    [toggleCompleted.rejected]: handleRejected,
    // [deleteAll.rejected]: handleRejected,

    [getAllTasks.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },

    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },

    [deleteTask.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(task => task.id !== payload.id);
    },

    [toggleCompleted.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const idx = state.items.findIndex(task => task.id === payload.id);
      state.items.splice(idx, 1, payload);
    },

    // [deleteAll.fulfilled](state, { payload }) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state = payload;
    // },
  },
});

export const tasksReducer = tasksSlice.reducer;

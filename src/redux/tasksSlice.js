import { createSlice } from '@reduxjs/toolkit';
import { getAllTasks, addTask } from './operations';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [getAllTasks.pending]: state => {
      state.isLoading = true;
    },
    [getAllTasks.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [getAllTasks.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addTask.pending](state) {
      state.isLoading = true;
    },
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addTask.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  deleteTask,
  toggleCompleted,
  deleteAll,
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

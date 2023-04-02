import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addTask: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },

    deleteTask(state, action) {
      const ind = state.items.findIndex(task => task.id === action.payload);
      state.items.splice(ind, 1);
    },
    toggleCompleted({ items }, action) {
      for (const task of items) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
    deleteAll(state) {
      state.items = [];
    },
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addTask,
  deleteTask,
  toggleCompleted,
  deleteAll,
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

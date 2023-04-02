import { filtersReducer } from './filtersSlice';
import { tasksReducer } from './tasksSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

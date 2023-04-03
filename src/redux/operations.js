import axios from 'axios';
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from './tasksSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6403b8063bdc59fa8f2bad68.mockapi.io';

// export const fetchTasks = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());
//     const resp = await axios.get('/tasks');
//     dispatch(fetchingSuccess(resp.data));
//   } catch (error) {
//     dispatch(fetchingError(error.message));
//   }
// };

export const getAllTasks = createAsyncThunk(
  'tasks/getAllTasks',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.get('/tasks');
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'task/addTask',
  async (config, { rejectWithValue }) => {
    try {
      const resp = await axios.post('/tasks', config);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'task/deleteTask',
  async (id, { rejectWithValue }) => {
    try {
      const resp = await axios.delete(`tasks/${id}`);
      console.log('resp.data', resp.data);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

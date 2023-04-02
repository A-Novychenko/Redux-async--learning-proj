import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './tasksSlice';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

export const fetchTasks = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const resp = await axios.get('/tasks');
    dispatch(fetchingSuccess(resp.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};

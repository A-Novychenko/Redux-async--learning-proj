import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './tasksSlice';

axios.defaults.baseURL = 'https://6403b8063bdc59fa8f2bad68.mockapi.io';

export const fetchTasks = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const resp = await axios.get('/tasks');
    dispatch(fetchingSuccess(resp.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};

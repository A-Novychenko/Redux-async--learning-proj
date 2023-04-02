import { Task } from 'components/Task/Task';
import { useDispatch, useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';
import {
  getError,
  getIsLoading,
  getStatusFilter,
  getTasks,
} from 'redux/selectors';
import css from './TaskList.module.css';
import { useEffect } from 'react';
import { getAllTasks } from 'redux/operations';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  const isLoading = useSelector(getIsLoading);

  const error = useSelector(getError);

  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  console.log('visibleTasks', visibleTasks);
  return (
    <>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <ul className={css.list}>
        {visibleTasks.map(task => (
          <li className={css.listItem} key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </>
  );
};

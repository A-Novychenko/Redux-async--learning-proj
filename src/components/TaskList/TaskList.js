import { Task } from 'components/Task/Task';
import { useDispatch, useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { getStatusFilter, getTasks, getTasksState } from 'redux/selectors';
import css from './TaskList.module.css';
import { useEffect } from 'react';
import { fetchTasks } from 'redux/operations';

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
  const { isLoading, error } = useSelector(getTasksState);

  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

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

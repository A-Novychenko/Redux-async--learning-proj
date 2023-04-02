import { Task } from 'components/Task/Task';
import { useDispatch, useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { getStatusFilter, getTasks } from 'redux/selectors';
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

  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

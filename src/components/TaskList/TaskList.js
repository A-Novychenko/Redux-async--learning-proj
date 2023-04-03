import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import {
  selectError,
  selectIsLoading,
  selectVisibleTasks,
} from 'redux/selectors';
import { getAllTasks } from 'redux/operations';
import css from './TaskList.module.css';

export const TaskList = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleTasks = useSelector(selectVisibleTasks);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  return (
    <>
      <p style={{ height: '30px' }}>
        {isLoading && 'Loading tasks...'}
        {error && { error }}
      </p>

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

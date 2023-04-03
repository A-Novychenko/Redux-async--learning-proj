import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/operations';

import css from './Task.module.css';
import { useState } from 'react';

export const Task = ({ task }) => {
  const [isBtnActive, setIsBtnActive] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    setIsBtnActive(true);
  };
  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.task}</p>
      <button className={css.btn} onClick={handleDelete} disabled={isBtnActive}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

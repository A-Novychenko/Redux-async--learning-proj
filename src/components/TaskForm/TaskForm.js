import { Button } from 'components/Button/Button';

import { useDispatch } from 'react-redux';

import css from './TaskForm.module.css';
import { addTask } from 'redux/operations';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(addTask({ task: form.elements.text.value, completed: false }));

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};

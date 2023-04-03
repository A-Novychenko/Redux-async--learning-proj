import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/filtersSlice';
// import { deleteAll } from 'redux/operations';
import { getStatusFilter } from 'redux/selectors';
import { statusFilters } from '../../redux/constants';

import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);

  const dispatch = useDispatch();

  const handlerFilter = filter => dispatch(setStatusFilter(filter));
  return (
    <div className={css.wrapper}>
      {/* <Button onClick={() => dispatch(deleteAll())}>Delete All</Button> */}
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handlerFilter(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handlerFilter(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handlerFilter(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GET_TODOS } from '../actions';
import { useSelector } from 'react-redux';
import { selectIsCreate, selectIsDelete } from '../selectors';
export const useFetchTodosData = () => {
  const dispatch = useDispatch();
  const isCreate = useSelector(selectIsCreate);
  const isDelete = useSelector(selectIsDelete);

  useEffect(() => {
    dispatch(GET_TODOS());
  }, [dispatch, isCreate, isDelete]); 
};





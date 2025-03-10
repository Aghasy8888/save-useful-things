import { useEffect } from 'react';
import {
  selectTest,
  selectUsers,
  setTest,
} from '../redux/features/globalSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchData } from '../redux/features/globalService';

const ToDo = () => {
  const test = useAppSelector(selectTest);
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  const handleTest = () => {
    dispatch(setTest('hi Bro'));
  };

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    console.log(users);
  }, [JSON.stringify(users)]);

  return (
    <div>
      <h1 className="text-yellow-400">{test}</h1>

      <button onClick={handleTest}>hiBro</button>
    </div>
  );
};

export default ToDo;

'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, logOut, toggleModerator } from '@/redux/features/authSlice';
import { AppDispatch, useAppSelector } from '@/redux/store';

export default function LogIn() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);

  const onClickLogin = () => {
    dispatch(login(username));
  };
  const onClickLogout = () => {
    dispatch(logOut());
  };
  const onClickToggle = () => {
    dispatch(toggleModerator());
  };

  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <br />
      <button onClick={onClickLogin}>Login</button>
      <br />
      <button onClick={onClickLogout}>Logout</button>
      <br />

      {isAuth && (
        <button onClick={onClickToggle}>Toggle moderator status</button>
      )}
    </div>
  );
}

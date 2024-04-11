'use client';

import { useState } from 'react';
import { login, logOut, toggleModerator } from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export default function LogIn() {
  const [username, setUsername] = useState('');
  const dispatch = useAppDispatch();
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

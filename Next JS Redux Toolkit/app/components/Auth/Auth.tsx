'use client'

import LogIn from '@/app/LogIn';
import { selectUserInfo } from '@/redux/features/auth/authSlice_2';
import { getUserInfo } from '@/redux/features/auth/userService';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React, { useEffect } from 'react';

const Auth = () => {
  const username = useAppSelector((state) => state.authReducer.user);
  const isModerator = useAppSelector((state) => state.authReducer.isModarator);
  const userInfo = useAppSelector(selectUserInfo);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserInfo())
  }, []);

  const userInfoComponents = userInfo?.results.map((res, index) => (
    <div key={index}>{res.name}</div>
  ));

  return (
    <>
      <LogIn />
      <h1>Username: {username}</h1>
      {userInfoComponents}
      {isModerator && <h1>This user is a moderator</h1>}
    </>
  );
};

export default Auth;

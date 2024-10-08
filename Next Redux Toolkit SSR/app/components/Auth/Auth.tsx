'use client';

import LogIn from '@/app/LogIn';
import { selectUserInfo, setUserInfo } from '@/redux/features/auth/authSlice_2';
import { selectIsModarator } from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';

const Auth = ({ usersInfo }: { usersInfo: IUserInfoTwo }) => {
  const username = useAppSelector(selectUserInfo);
  const isModerator = useAppSelector(selectIsModarator);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUserInfo(usersInfo));
  }, []);

  const userInfoComponents = usersInfo?.results.map((res, index) => (
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

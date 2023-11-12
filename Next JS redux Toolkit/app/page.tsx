'use client'

import { useAppSelector } from '@/redux/store'
import LogIn from './LogIn';

import styles from './page.module.css';

export default function Home() {
  const username = useAppSelector((state) => state.authReducer.username);
  const isModerator = useAppSelector((state) => state.authReducer.isModarator);


  return (
    <main className={styles.main}>
        <LogIn />
        <h1>Username: {username}</h1>
        {isModerator && <h1>This user is a moderator</h1>}
    </main>
  );
}

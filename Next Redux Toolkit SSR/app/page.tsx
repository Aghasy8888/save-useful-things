import { fetchUsers } from '@/lib/fetchUsers';
import Auth from './components/Auth/Auth';
import styles from './page.module.css';

export default async function Home() {
  const usersInfo = await fetchUsers();

  return (
    <main className={styles.main}>
      <Auth usersInfo={usersInfo} />
    </main>
  );
}

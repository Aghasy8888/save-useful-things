import { useEffect, useState } from 'react';
import minRequest from '@/helpers/minRequest';

export const apiUrl = 'https://randomuser.me/api?page=1000';

const useFetchInfo = (): { users: {}; pending: boolean } => {
  const [users, setUsers] = useState({});
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await minRequest(apiUrl);
        setUsers(usersData);
      } catch (err) {
        console.error(err);
      } finally {
        setPending(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, pending };
};

export default useFetchInfo;

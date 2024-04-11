import minRequest from '@/helpers/minRequest';
import { apiUrl } from '@/redux/features/auth/userService';

export const fetchUsers = async () => {
  const response = await minRequest(`${apiUrl}/berry`);
  console.log('response', response);

  return response;
};

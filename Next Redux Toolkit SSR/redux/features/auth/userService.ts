import { createAsyncThunk } from '@reduxjs/toolkit';
import minRequest from '@/helpers/minRequest';
export const apiUrl = 'https://pokeapi.co/api/v2';

export const getUserInfo = createAsyncThunk('authTwo/getUserInfo', async () => {
  const response = await minRequest(`${apiUrl}/berry`);
  console.log('response', response);
  
  return response;
});

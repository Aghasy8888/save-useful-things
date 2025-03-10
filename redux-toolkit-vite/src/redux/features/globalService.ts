import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('global/fetchData', async () => {
  const  data = await fetch('https://jsonplaceholder.typicode.com/users');  

  return data.json();
})
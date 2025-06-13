import type { LoginForm } from '../schema/loginSchema';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'


/**
 * ログイン /api/login
 */
// Form作成後、引数の型を変更
const loginUser = createAsyncThunk('auth/loginUser', async(data: LoginForm) => {
  await axios.get('/sanctum/csrf-cookie');
  const response = await axios.post('/api/login', data);
  return response.data.user
});

const logoutUser = createAsyncThunk('auth/logoutUser', async() => {
  await axios.post('/api/logout');
});


export { loginUser, logoutUser }
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'
import type { LoginForm } from '../schema/loginSchema';


// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'http://localhost';
// axios.defaults.headers.common['X-XSRF-TOKEN'] = getXsrfTokenFromCookie();

// function getXsrfTokenFromCookie() {
//   const match = document.cookie.match('(^|;)\\s*XSRF-TOKEN\\s*=\\s*([^;]+)');
//   return match ? decodeURIComponent(match[2]) : '';
// }

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
})


export { loginUser, logoutUser }
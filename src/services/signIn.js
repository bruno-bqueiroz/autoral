import api from './api';

export async function signIn(email, password) {
  const response = await api.post('/auth/sign-in', { email, password });
  console.log("🚀 ~ signIn ~ response:", response.data)
  return response.data;
}

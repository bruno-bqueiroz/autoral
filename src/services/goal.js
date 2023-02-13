import api from './api';


export async function GetGoalByMonth(month, token) {

  const config = {
    headers: {
      Authorization: `Bearer ${token.token}`
    }
  };
    const response = await api.get(`/goal?month=${month}`, config);
    console.log();
      return response.data;
}

export async function PostMeta(month, body, token) {

  const config = {
    headers: {
      Authorization: `Bearer ${token.token}`
    }
  };

    const response = await api.post(`/goal?month=${month}`,body, config);
    console.log();
      return response.data;
}
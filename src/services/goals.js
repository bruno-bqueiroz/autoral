import api from './api';



  export async function getGoal() {
    const userId = 4;
    const response = await api.get(`/goal?userId=${userId}&month=${0}`);
      return response.data;
  }
  
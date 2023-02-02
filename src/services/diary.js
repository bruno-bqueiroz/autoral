import api from './api';

export async function getDiaryBydate(date) {
    const response = await api.get(`/day?date=${date}`);
    console.log();
      return response.data;
}

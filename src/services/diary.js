import api from './api';

export async function getDiaryBydate(date) {
    const response = await api.get(`/day?date=${date}`);
    console.log();
      return response.data;
}

export async function PostDiaryBydate({dataEntrada, dataSaida, dataKM, dataTempo, dataNViagens, dataDate}) {
  const response = await api.post(`/day?date=${dataDate}`,{
    "entrada": parseInt(dataEntrada),
    "saida": parseInt(dataSaida),
    "horasTrabalhadas": parseInt(dataTempo),
    "KmPercorridos": parseInt(dataKM),
    "NumeroViagens": parseInt(dataNViagens),
    "userId": 1
  });
    return response.data;
}

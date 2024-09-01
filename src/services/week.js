import api from './api';

export async function getWeekById(userId) {
   const response = await api.get(`/week?userId=${userId}`)

      console.log("🚀 ~ getWeekById ~ response:", response)
      return response.data;
}

export async function PostWeekById({dataEntrada, dataSaida, dataKM, dataTempo, dataNViagens, dataDate}) {
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

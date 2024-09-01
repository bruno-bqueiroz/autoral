import api from './api';

export async function getDiaryBydate(date) {
  const userId = 1;
   const response = await api.get(`/day?date=${date}`);
   const teste = await api.get(`/week?userId=${userId}`)

      console.log("🚀 ~ getDiaryBydateadadawawdawawawadawwadwad ~ teste:", teste)
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

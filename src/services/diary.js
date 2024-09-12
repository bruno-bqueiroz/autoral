import api from './api';

export async function getDiaryBydate(date) {
  const token = localStorage.getItem("token");
   console.log("🚀 ~ getDiaryBydate ~ token:", token)
   const config = {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  };
   const response = await api.get(`/day?date=${date}`, config);
  //  const teste = await api.get(`/week?userId=${userId}`)

      return response.data;
}

export async function PostDiaryBydate({dataEntrada, dataSaida, dataKM, dataTempo, dataNViagens, dataDate}) {
  const token = localStorage.getItem("token");
   console.log("🚀 ~ getDiaryBydate ~ token:", token)
   const config = {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  };
  const response = await api.post(`/day?date=${dataDate}`,{
    "entrada": parseInt(dataEntrada),
    "saida": parseInt(dataSaida),
    "horasTrabalhadas": parseInt(dataTempo),
    "KmPercorridos": parseInt(dataKM),
    "NumeroViagens": parseInt(dataNViagens),
    "userId": 1
  }, config);
    return response.data;
}

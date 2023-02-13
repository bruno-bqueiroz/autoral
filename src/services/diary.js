import api from './api';


export async function GetDiaryBydate(date, token) {

  const config = {
    headers: {
      Authorization: `Bearer ${token.token}`
    }
  };
    const response = await api.get(`/day?date=${date}`, config);
    console.log();
      return response.data;
}

export async function PostDiaryBydate({dataEntrada, dataSaida, dataKM, dataTempo, dataNViagens, dataDate, token}) {
  console.log(token.token)
  const config = {
    headers: {
      Authorization: `Bearer ${token.token}`
    }
  };
  const response = await api.post(`/day?date=${dataDate}`,{
    "entrada": parseInt(dataEntrada),
    "saida": parseInt(dataSaida),
    "horasTrabalhadas": parseInt(dataTempo),
    "KmPercorridos": parseInt(dataKM),
    "NumeroViagens": parseInt(dataNViagens),
  }, config);
    return response.data;
}

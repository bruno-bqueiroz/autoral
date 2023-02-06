import api from './api';

export async function postEnroll(form) {
    const userId = 1;
    const response = await api.post(`/enroll?userId=${userId}`,[{
        "name": form.name,
        "cpf": form.cpf,
        "userId": userId,
        "city": form.city,
        "state": form.state
      },
      {
          "marca": form.marca,
          "modelo": form.modelo,
          "ano": parseInt(form.ano),
      }]);
      return response.data;
  }

  export async function getEnroll() {
    const userId = 1;
    const response = await api.get(`/enroll?userId=${userId}`);
      return response.data;
  }
  
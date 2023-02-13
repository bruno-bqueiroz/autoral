import api from './api';

export async function postEnroll(form, token) {
    const userId = 73;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    const body = [{
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
    }]
    const response = await api.post('/enroll',body, config);
      return response.data;
  }

  export async function getEnroll(token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    const response = await api.get(`/enroll`, config);
      return response.data;
  }
  
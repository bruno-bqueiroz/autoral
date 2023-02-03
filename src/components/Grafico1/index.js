import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Entradas da semana 02/10/2022 - 08/10/2022',
    },
  },
};

const labels = ['Segunda' , 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Entrada',
      data: labels.map((v) =>  Math.floor(Math.random() * 200 + 150)),
      backgroundColor: '#1d5c94',
    },
    {
      label: 'Saida',
      data: labels.map(() => Math.random() * 100 +50),
      backgroundColor: '#dfb89e',
    },
  ],
};

export function Charts() {
  return <Bar options={options} data={data} />;
}

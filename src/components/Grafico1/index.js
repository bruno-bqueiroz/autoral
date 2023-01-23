import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,np
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
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Segunda' , 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo'];
const entrada = [250, 155, 201, 0, 320, 330, 200]
export const data = {
  labels,
  datasets: [
    {
      label: 'Entrada',
      data: labels.map((v) =>  Math.floor(Math.random() * 200 + 100)),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Saida',
      data: labels.map(() => Math.random() * 100 +50),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function Charts() {
  return <Bar options={options} data={data} />;
}

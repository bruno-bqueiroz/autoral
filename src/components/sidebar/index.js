import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getWeekById } from '../../services/week';
import styled from 'styled-components';
import { Line, Pie } from 'react-chartjs-2';
// Importar todos os elementos necessários
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    ArcElement,
  } from 'chart.js';
  
  // Registrar todos os elementos necessários
  ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    ArcElement
  );

export default function Sidebar() {
    const [data, setData] = useState([]);
    const [totalGanhos, setTotalGanhos] = useState(0);
    const [totalGastos, setTotalGastos] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getWeekById(1); // Passe o userId correto aqui
                const dados = response;
                const ganhos = dados.reduce((acc, item) => acc + item.entrada, 0);
                const gastos = dados.reduce((acc, item) => acc + item.saida, 0);

                setData(dados);
                setTotalGanhos(ganhos);
                setTotalGastos(gastos);
            } catch (error) {
                console.error('Erro ao carregar dados:', error);
            }
        };

        fetchData();
    }, []);

    const labels = data.map(item => new Date(item.date).toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric', month: 'short' }));
    const ganhosData = data.map(item => item.entrada);
    const gastosData = data.map(item => item.saida);

    const dataGrafico = {
        labels,
        datasets: [
            {
                label: 'Ganhos',
                data: ganhosData,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
            {
                label: 'Gastos',
                data: gastosData,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };

    const pieData = {
        labels: ['Ganhos', 'Gastos'],
        datasets: [
            {
                data: [totalGanhos, totalGastos],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <Container>
            <b>Extrato semanal</b>
            <span>
                <Line data={dataGrafico} />
            </span>
            <ul>
                <span>
                    <p>Ganhos</p>
                    <b>R$ {totalGanhos.toFixed(2)}</b>
                </span>
                
                <span>
                    <p>Gastos</p>
                    <b>R$ {totalGastos.toFixed(2)}</b>
                </span>
            </ul>
            
            
        </Container>
    );
}


//              <PieWrapper>
//                 <Pie data={pieData} />
//              </PieWrapper>

const Container = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    b{  
        padding-top: 5vh;
        font-size: 2vw;
        color: #14121F;
    }
    span{
        margin-top: 5vh;
        width:  72%;
        height: 85%;
        background-color: #e4e4e5;
        border: solid 1px #a6afaa;
        border-radius: 10px;
    }
    ul{
        width:72%;
        display: flex;
        
        span{
            margin: 1vw;
            width:10 vw;
            heigth: 80%;
            min-width: 6vw;
            background-color: #AFEEEE;
            border: solid 1px #AFEEEE;
            border-radius: 5px;
            color: #14121F;
            font-size: 1.5vw;
            font-weight: 800;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            p{
                margin: 1vw;
            }   
            b{
                font-size:2vw;
                color: #14121F;
            }
        }
    }
`;

const PieWrapper = styled.div`
    margin-top: 5vh;
    width: 72%;
    height: 40%;
    border: solid 1px #a6afaa;
    border-radius: 10px;
`;
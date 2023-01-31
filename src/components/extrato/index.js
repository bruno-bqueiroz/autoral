import styled from "styled-components";
import { AiFillFolderAdd } from 'react-icons/ai';
import { useState } from "react";
import dayjs from 'dayjs';
import axios from "axios";


export default function ResumoDiario(){ 
    const [date, setDate] = useState(dayjs().format('DD/MM/YYYY'));
    const [data, setData] = useState([])
    console.log(date)
    

        async function diario(date){
            console.log('chamou')
            console.log(date)
            try {
                const data = await axios.get(`http://localhost:5434/day?date=${date}`);
                setData(data);
            } catch (error) {
                console.log(error);
            }
        }
        console.log(data);
    

    return (
        <Container>
            <span>
                <ul>
                    <p>Meta do Mês</p>
                    <b>R$ 4.000,00</b>
                </ul>
                <ul> 
                    <p>Faturamento</p>
                    <b>R$ 3.301,00</b>
                </ul>
                <ul>
                    <p>Falta para bater a meta</p>
                    <b>R$ 699,00</b>
                </ul>
                <ul>
                    <form onInputCapture={()=> diario()}>
                        <input type="date" value={date} placeholder={date} required onChange={e => setDate(e.target.value)} />
                    </form>
                </ul>
            </span>
            <span>
                <div>
                    <p>SALDO</p>
                    <b>R$ {data.entrada - data.saida},00</b>
                    
                </div>
                <div>
                    <p>GASTOS</p>
                    <b>R$ {data.saida},00</b>
                </div>
                <div>
                    <p>FATUROU</p>
                    <b>R$ {data.entrada},00</b>
                </div>
                <div>
                    <p>P/ HORA</p>
                    <b>R$ {data.entrada / data.horasTrabalhadas},00</b>
                </div>
                <div>
                    <p>TEMPO</p>
                    <b>{data.horasTrabalhadas} hrs</b>
                </div>
                <div>
                    <p>KM RODADO</p>
                    <b>{data.KmPercorridos}</b>
                </div>
                <div>
                    <p>MÉDIA P/ KM</p>
                    <b>R$ {(data.entrada/data.KmPercorridos).toFixed(2)}</b>
                </div>
                <div>
                    <p>MÉDIA P/ VIAGEM</p>
                    <b>R$ {(data.entrada/data.NumeroViagens).toFixed(2)}</b>
                </div>
                <div><p>ENTRADA</p><b><AiFillFolderAdd/></b></div>
            </span>
        </Container>
    )
}

const Container = styled.div`
    font-size: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    span:first-child{
        width: 100%;
        height: 15%;
        font-size: 1.5vw;
        display: flex;
        color: #14121F;
        
        align-items: center;
        justify-content: center;
        ul{
            margin: 2vh 15px;
        }
        p{
            margin: 5px 0 0 0;
            
            font-weight: 500;
        }
        ul:last-child{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 2vh 0;
            form{
                input{
                    background-color: #e0c5ff;
                    color: #FFFFFF;
                }
                input:last-child{
                    background-color: #14121F;
                    color: #FFFFFF;
                    border: solid 1px #FFFFFF;
                    border-radius: 4px;
                    margin-left: 4px;
                }
            }
        }
        
    }
    span:last-child{
        width: 95%;
        height: 83%;
        background-color: #FFFFFF;
        border: solid #FFFFFF;
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        div{
            width: 10vw;
            height: 8vw;
            margin: 1vw 2vw;
            background-color: #EBFDEF;
            border: solid 1px #EBFDEF;
            border-radius: 5px;
            color: #14121F;
            font-size: 1vw;
            font-weight: 800;
            p{
                margin: 1vw;
            }   
            b{
                font-size:2vw;
                color: #14121F;
            }
        }
        div:last-child{
            width: 20vw;
            height: 8vw;
            margin: 1vw 2vw;
            background-color: #FFEFE7;
            color: #14121F;
            font-size: 1.7vw;
            p{
                margin: 1vw;
            }
            b{
                font-size:4vw;
            }
        }
    }
    div:last-child:hover{
        position: relative;
        box-shadow: 
            0 0 0 1px #f9f9f9,
            0 0 0 2px #e0c5ff,
            0 0 3px 3px #553e27,
            0 0 5px 5px #6780f7;
    }
`
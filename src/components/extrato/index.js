import styled from "styled-components";
import { AiFillFolderAdd } from 'react-icons/ai';
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function ResumoDiario(){ 
    const [startDate, setStartDate] = useState(new Date());
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
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </ul>
            </span>
            <span>
                <div>
                    <p>SALDO</p>
                    <b>R$ 281,00</b>
                    
                </div>
                <div>
                    <p>GASTOS</p>
                    <b>R$ 120,00</b>
                </div>
                <div>
                    <p>FATUROU</p>
                    <b>R$ 401,00</b>
                </div>
                <div>
                    <p>P/ HORA</p>
                    <b>R$ 36,45</b>
                </div>
                <div>
                    <p>TEMPO</p>
                    <b>11:02 hrs</b>
                </div>
                <div>
                    <p>KM RODADO</p>
                    <b>226</b>
                </div>
                <div>
                    <p>MÉDIA P/ KM</p>
                    <b>R$ 1,77</b>
                </div>
                <div>
                    <p>MÉDIA P/ VIAGEM</p>
                    <b>R$ 13,79</b>
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
        color: #687b76;
        ul{
            margin: 2vh 15px;
        }
        p{
            margin: 5px 0 0 0;
            
            font-weight: 500;
        }
        
    }
    span:last-child{
        width: 95%;
        height: 83%;
        background-color: #f9f9f9;
        border: solid #f9f9f9;
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        div{
            width: 10vw;
            height: 8vw;
            margin: 1vw 2vw;
            background-color: #a6afaa;
            border: solid 1px #e4e4e5;
            border-radius: 5px;
            color: #e4e4e5;
            font-size: 1vw;
            font-weight: 800;
            p{
                margin: 1vw;
            }   
            b{
                font-size:2vw;
                color: #687b76;
            }
        }
        div:last-child{
            width: 20vw;
            height: 8vw;
            margin: 1vw 2vw;
            background-color: #e4e4e5;
            color: #334c57;
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
            0 0 0 2px #e4e4e5,
            0 0 3px 3px #a6afaa,
            0 0 5px 5px #687b76;
    }
`
import styled from "styled-components";
import { AiFillFolderAdd } from 'react-icons/ai';
import React from "react";
import { useState } from "react";
import dayjs from 'dayjs';
import Meta from "./meta";
import ModalStyle from "./modal/Modal";


export default function ResumoDiario(){ 
    
    const [date, setDate] = useState(dayjs().format('DD/MM/YYYY'));
    const [data, setData] = useState([]);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
       }

    return (
        <Container>
            <ModalStyle setDate = {setDate} modalIsOpen = {modalIsOpen} setIsOpen={setIsOpen} setData = {setData} />
            <Meta date = {date} setDate = {setDate} setData = {setData}/>
            {!data? <span></span>:
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
                <div onClick={openModal}><p>ENTRADA</p><b><AiFillFolderAdd/></b></div>
            </span>}
        </Container>
    )
}

const Container = styled.div`
    font-size: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
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
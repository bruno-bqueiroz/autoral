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
    
    const saldo = (data.entrada && data.saida ? (data.entrada - data.saida).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 0) ;
    const gasto = (data.saida ? (data.saida).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 0);
    const fatura = (data.entrada ? (data.entrada).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 0);
    const pHora = (data.entrada && data.horasTrabalhadas ?(data.entrada / data.horasTrabalhadas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 0);
    const mediaPKm = (data.entrada && data.KmPercorridos ?(data.entrada/data.KmPercorridos).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 0);
    const mediaPViagem = (data.entrada && data.NumeroViagens ?(data.entrada/data.NumeroViagens).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 0);
    return (
        <Container>
            <ModalStyle setDate = {setDate} modalIsOpen = {modalIsOpen} setIsOpen={setIsOpen} setData = {setData} />
            <Meta date = {date} data = {data} setDate = {setDate} setData = {setData}/>
            {!data? <span></span>:
            <span>
                <div>
                    <p>SALDO</p>
                    <b>{saldo}</b>
                    
                </div>
                <div>
                    <p>GASTOS</p>
                    <b>{gasto}</b>
                </div>
                <div>
                    <p>FATUROU</p>
                    <b>{fatura}</b>
                </div>
                <div>
                    <p>P/ HORA</p>
                    <b>{pHora}</b>
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
                    <b>{mediaPKm}</b>
                </div>
                <div>
                    <p>MÉDIA P/ VIAGEM</p>
                    <b>{mediaPViagem}</b>
                </div>
                <div onClick={openModal}><p>ENTRADA</p><b><AiFillFolderAdd/></b></div>
            </span>}
        </Container>
    )
}

const Container = styled.div`
    justify-content: center;
    span:last-child{
        width: 100%;
        height: 85%;
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
            background-color: #a6afaa;
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
            background-color: #FFDAB9;
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
            0 0 0 2px #e0c5f9,
            0 0 3px 3px #553e27,
            0 0 5px 5px #6780f7;
    }
`
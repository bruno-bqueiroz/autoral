import styled from "styled-components";
import { useState } from "react";
import { PostDiaryBydate } from "../../../services/diary";
import {  toast } from 'react-toastify';
import { IoCloseSharp } from "react-icons/io5";
import 'react-toastify/dist/ReactToastify.css';

export default function FormModal({setDate, setIsOpen, setData, token}){
    const [dataEntrada, setDataEntrada ] = useState('');
    const [dataSaida, setDataSaida ] = useState('');
    const [dataKM, setDataKM ] = useState('');
    const [dataTempo, setDataTempo ] = useState('');
    const [dataDate, setDataDate ] = useState('');
    const [dataNViagens, setDataNViagens ] = useState('');
    const notify = () => toast("Sucesso!!!");
    function closeModal() {
      setIsOpen(false);
    }
    async function postDiary(e){
        
         e.preventDefault();
         console.log(dataDate)
         try {
            
             const datas = await PostDiaryBydate({dataEntrada, dataSaida, dataKM, dataTempo,dataNViagens, dataDate, token});
             setData(datas);
             setDate(dataDate);
             notify();
             closeModal();
             
         } catch (error) {
             console.log(error);
         }
    }
    return (
        <Container>
            
        <button onClick={closeModal}><IoCloseSharp/></button>
        <form onSubmit={postDiary}>
            <div>
                <label>Entrada</label>
                <input type="text" value={dataEntrada} placeholder={'Entrada'} required onChange={e => setDataEntrada(e.target.value)}  />
            </div>
            <div>
                <label>Saida</label>
                <input type="text" value={dataSaida} placeholder={'Saida'} required onChange={e => setDataSaida(e.target.value)}  />
            </div>
            <div>
                <label>KM</label>
                <input type="text" value={dataKM} placeholder={'KM'} required onChange={e => setDataKM(e.target.value)}  />
            </div>
            <div>
                <label>Tempo</label>
                <input type="text" value={dataTempo} placeholder={'Tempo'} required onChange={e => setDataTempo(e.target.value)}  />
            </div>
            <div>
                <label>N Viagens</label>
                <input type="text" value={dataNViagens} placeholder={'N Viagens'} required onChange={e => setDataNViagens(e.target.value)}  />
            </div>
            <div>
                <label>data</label>
                <input type="date" value={dataDate} placeholder={'Data'} required onChange={e => setDataDate(e.target.value)}  />
            </div>
            <div className="button">
                <input type="submit" value="Enviar" />
            </div>
        </form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    button{
        height: 25px;
        width: 22px;
        padding: 0px;
        font-size: 20px;
        margin-top: -2.5vh;
        margin-left: 25vw;
        margin-right: 1vw;
        background-color: inherit;
        border: none;
        border-radius: 3px;
    }
    form{
        .button{
            margin-left: 2.5vw;
            margin-bottom: 1vh;
            margin-top: 2.5vh;
            height: 35px;
            width: 20vw;
            input{
                width: 20vw;
                color: #FFFFFF;
                font-size: 1.3vw;
                font-weight: 800;
                background-color: #1d5c94;
                border: solid #1d5c94;
                
            }
        }
        
        div{
            margin: 10px;
            padding: 3px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            input{
                height: 35px;
                width: 100px;
                border: solid 1px #e0c5ff;
                border-radius: 4px;
                background-color: #FFFFFF;
            }
            
        }
    }
    
`
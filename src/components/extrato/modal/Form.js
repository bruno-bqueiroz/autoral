import { customStyles } from "../../../assets/styles/modal";
import styled from "styled-components";
import { useState } from "react";
import { PostDiaryBydate } from "../../../services/diary";


export default function FormModal({setDate, setIsOpen, setData }){
    const [dataEntrada, setDataEntrada ] = useState(0);
    const [dataSaida, setDataSaida ] = useState(0);
    const [dataKM, setDataKM ] = useState(0);
    const [dataTempo, setDataTempo ] = useState(0);
    const [dataDate, setDataDate ] = useState(0);
    const [dataNViagens, setDataNViagens ] = useState(0);
    
    function closeModal() {
      setIsOpen(false);
    }
    async function postDiary(e){
         e.preventDefault();
         console.log(dataDate)
         try {
             const datas = await PostDiaryBydate({dataEntrada, dataSaida, dataKM, dataTempo,dataNViagens, dataDate});
             setData(datas);
             setDate(dataDate)
             closeModal();
         } catch (error) {
             console.log(error);
         }
    }
    return (
        <Container>
        <button onClick={closeModal}>close</button>
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
            <input type="submit" value="Enviar" />
        </form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    button{
        margin-top: 1vh;
        margin-left: 12vw;
        margin-right: 1vw;
        background-color: #e0c5ff;
        border: solid 1px #e0c5ff;
        border-radius: 3px;
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
        }
    }
`
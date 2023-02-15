import dayjs from "dayjs";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { GetDiaryBydate } from "../../services/diary";
import { GetGoalByMonth, PostMeta } from "../../services/goal";
import {  toast } from 'react-toastify';

export default function Meta({date, setDate, setData, token}){
    const [month, setMonth] = useState(dayjs().format('MM'));
    const [dataGoal, setDataGoal] = useState({
        id: 0,
        entrada: 0,
        meta: 0,
        month: 0,
        deficit: 0
    });
    const [meta, setMeta] = useState();

    const notify = () => toast("Sucesso!!!");
    const errorNotify = () => toast("Erro ao Salvar!");

    function getGoal(){
        const requisicao = GetGoalByMonth(month, token);
            requisicao.then(response => {
                setDataGoal({
                id: response.id,
                entrada: response.entrada,
                meta: `R$ ${response.meta} ,00`,
                month: response.month,
                deficit: response.meta - response.entrada,
                });
                setMeta(Number(response.meta));

            });
            requisicao.catch(response=>{
                console.log(response);
            });
    }
    
      async function postWithmeta(e){
        e.preventDefault();
        const body = {
            id: dataGoal.id || 0,
            entrada: dataGoal.entrada,
            meta
        }
        
        try {
            console.log(token)
        const datas = await PostMeta(month, body, token);
        getGoal();
        
        
        console.log(datas)
        notify();
        } catch (error) {
            errorNotify();
            console.log(error);
        }
      }

    useEffect(() => {
        getGoal();
        }, []);
    
    async function diary(){
    try {
        const datas = await GetDiaryBydate(date, token);
            setData(datas);

    } catch (error) {
            console.log(error);
    }
    }
    console.log(dataGoal);
    return (
        <Container>

            {dataGoal ? <>
            <ul>
                <p>Meta do Mês</p>
                <form onSubmit={postWithmeta} >
                <p>R$</p><input type="text" name="meta" value={meta}  placeholder="Add Meta" onChange={e => setMeta(e.target.value)} required/>
                </form>

            </ul>
            <ul> 
                <p>Faturamento</p>
                <b>R$ {dataGoal.entrada},00</b>
            </ul>
            <ul>
                <p>Falta para bater a meta</p>
                <b>R$ {dataGoal.deficit},00</b>
            </ul></>: <>Loading ...</>}
            
            <ul>
                <form onInputCapture={()=> diary()}>
                    <input type="date" value={date} placeholder={date} required onChange={e => setDate(e.target.value)} />
                </form>
            </ul>
        </Container>
    )
}

const Container = styled.span `
    width: 100%;
    height: 15%;
    font-size: 1.5vw;
    display: flex;
    color: #14121F;
    align-items: center;
    justify-content: center;
    ul{
        margin: 2vh 15px;
        form{
            p{
                font-size: 1.2vw;
                margin-right: 0.5vw;
                margin-left: 1vw;
            }
            display: flex;
            input{
                width: 8vw;
                background-color: #a6afaa;
                border: #a6afaa;
                color: #14121F;
                font-weight: 600;
                font-size: 1.4vw;
                
            }
        }
    }
    p{
        margin: 5px 0 0 0;
        font-weight: 600;
    }
    ul:last-child{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2vh 0;
        form{
            input{
                width: auto;
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
`
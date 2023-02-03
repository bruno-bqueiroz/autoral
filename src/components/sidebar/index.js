import styled from "styled-components";
import { Charts } from "../Grafico1";

export default function Sidebar(){
    return (
        <Container>
                <b>Extrato semanal</b>
                <span>
                    <Charts/>
                </span>
                <ul>
                <div>
                    <p>Lucro</p>
                    <b>R$ 1100,00</b>
                </div>
                <div>
                    <p>Gastos</p>
                    <b>R$ 400,00</b>
                </div>
                </ul>
        </Container>
    )
}

const Container = styled.div`
    margin-left: 1.5vw;
    margin-top: 3vw;
    width: 90%;
    height: 85%;
    background-color: #f9f9f9;
    border: solid #f9f9f9;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    b{  
        margin-top: 5vh;
        font-size: 2vw;
        color: #14121F;
    }
    span{
        margin-top: 5vh;
        width:  90%;
        height: 40%;
        background-color: #e4e4e5;
        border: solid 1px #a6afaa;
        border-radius: 10px;
    }
    ul{
        display: flex;
        div:first-child{
            width: 14vw;
            height: 10vw;
            margin: 1vw 2vw;
            background-color: #EBFDEF;
            border: solid 1px #EBFDEF;
            border-radius: 5px;
            color: #14121F;
            font-size: 1.5vw;
            font-weight: 800;
            display: flex;
            flex-direction: column;
            p{
                margin: 1vw;
                
            }   
            b{
                font-size:2vw;
                color: #14121F;
            }
        }
        div:last-child{
            width: 14vw;
            height: 10vw;
            margin: 1vw 2vw;
            background-color: #FFEFE7;
            border: solid 1px #FFEFE7;
            border-radius: 5px;
            color: #14121F;
            font-size: 1.5vw;
            font-weight: 800;
            display: flex;
            flex-direction: column;
            p{
                margin: 1vw;
            }   
            b{
                font-size:2vw;
                color: #14121F;
            }
        }
    }
`
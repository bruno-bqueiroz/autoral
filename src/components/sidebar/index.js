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
    width: 100%;
    height: 75vh;
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
            background-color: #AFEEEE;
            border: solid 1px #AFEEEE;
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
            background-color: #FFDAB9;
            border: solid 1px #FFDAB9;
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
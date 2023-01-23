import styled from "styled-components";

export default function Sidebar(){
    return (
        <Container>
                <b>Extrato semanal</b>
                <span>
                    <img src="https://venngage-wordpress.s3.amazonaws.com/uploads/2021/09/ed8e678d-f7b7-43f4-ab4d-ce34c6bc4f70.png" alt="grafico de pizza"/>
                </span>
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
        color: #334c57;
    }
    span{
        margin-top: 5vh;
        width:  90%;
        height: 80%;
        background-color: #e4e4e5;
        border: solid 1px #a6afaa;
        border-radius: 10px;
        img{
            width: 99%;
            height: auto;
        }
    }
`
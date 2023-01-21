import styled from "styled-components";

export default function ResumoDiario(){
    return (
        <Container>
            <span></span>
            <span></span>
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
    }
    span:last-child{
        width: 95%;
        height: 83%;
        background-color: #f9f9f9;
        border: solid #f9f9f9;
        border-radius: 10px;
    }
`
import styled from "styled-components";

export default function RedirectButtons(){
    return (
        <>
            <Container>
                <a href="/home" >Home</a>
                <a href="/resumo">Resumo</a>
                <a href="/cadastro">Cadastro</a>
            </Container>
        </>
    )
}

const Container = styled.span`
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    a{  
        margin-right: 5vw;
        margin-top: 3vh;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 2vw;
        font-weight: 600;
        color: #687b76;
        text-decoration: none;
        transition: 0.5s;
        opacity: 0.8;   
    }
    a:hover{
        color: #334c57;
        opacity: 1; 
        

    }
`
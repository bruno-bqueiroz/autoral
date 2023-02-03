import styled from "styled-components";

export default function RedirectButtons(){
    return (
        <>
            <Container>
                <a href="/" >Home</a>
                <a href="/resumo">Resumo</a>
                <a href="/cadastro">Cadastro</a>
            </Container>
        </>
    )
}

const Container = styled.span`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    a{  
        margin-right: 5vw;
        margin-top: 3vh;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 2vw;
        font-weight: 600;
        color: #14121F;
        text-decoration: none;
        transition: 0.5s;
        opacity: 0.8;   
    }
    a:hover{
        color: #1d1614; 
        opacity: 1; 
        

    }
`
import styled from "styled-components"; 

import RedirectButtons from "../../components/buttons";

export default function Logo(){
    return (
        <Container>
            <div>
                <p>Control 4 Drivers</p>
                <RedirectButtons/>
            </div>
            <div className="perfil">
                <img src="https://cf.shopee.com.br/file/877b26f626ab26a6db8c53788ffc3220" alt="perfil"></img>
                <h3>Michael</h3>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    padding-left: 3vw;
    padding-right: 1vw;
    height: 10vh;
    width: 100vw;
    font-size: 1vw;
    background-color: black;
    position: relative;
    top:0;
    div:first-child{
        border: none;
        padding-top: 1vh;
        display: flex;
        align-items: center;
        span{
            display: flex;
            align-items: center;
            padding-top: 3vh;
        }
        b{  
            font-size: 2vw;
            margin-left: 1vw;
            color: #ffffff;
        }
        p{
            font-size: 1.4vw;
            font-weight: 900;
            color: #ffffff;
        }
    }
    .perfil{ 
        width: 10vw;
        height: 5vh;
        display: flex;
        align-items: center;
        font-size: 20px;
        margin-top: 5vh;
        margin-left: 25vw;
        margin-right: 2vw;
        border: none;
        img{
            height: 35px;
            width: 35px;
            border-radius: 50%;
        }
        h3{
            margin-left: 1vw;
            font-size: 1.4vw;
            font-weight: 150;
            color: #ffffff;
        }
    }
    
    
    `
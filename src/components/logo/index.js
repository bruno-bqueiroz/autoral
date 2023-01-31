import styled from "styled-components";
import { FaCarSide } from 'react-icons/fa';

export default function Logo(){
    return (
        <Container>
            <div>
                <b>
                    <FaCarSide/>
                </b>
                <b>Control for drivers</b>
            </div>
            <div>
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
    height: 12vh;
    width: 100vw;
    font-size: 1vw;
    color: #1d1614;
    div:first-child{
        border: none;
        margin-left: 0vw;
        b{  
            font-size: 2vw;
            margin-left: 1vw;
        }
    }
    div{ 
        width: 140px;
        height: 50px;
        display: flex;
        align-items: center;
        font-size: 20px;
        color: #14121F;
        margin-left: 65vw;
        img{
            height: 40px;
            width: 40px;
        }
    }
    
    
    `
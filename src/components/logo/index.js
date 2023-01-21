import styled from "styled-components";
import { FaCarSide } from 'react-icons/fa';

export default function Logo(){
    return (
        <Container>
            <span>
            <FaCarSide/>
            </span>
         <b>Control for drivers</b>
        </Container>
    )
}

const Container = styled.span`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 2vw;
    height: 12vh;
    width: 23vw;
    font-size: 2.5vw;
    color: #334c57;
    span{
        width: 25px;
        border: none;
        font-size: 2vw;
        color: #687b76;
    }
    
    `
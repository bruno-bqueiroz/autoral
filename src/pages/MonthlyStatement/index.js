import styled from "styled-components";
import Page from "../../components/Page";
import RedirectButtons from "../../components/buttons";
import Logo from "../../components/logo";
import { Charts } from "../../components/Grafico1";

export default function MonthlyStatement(){
    return (
        <>
        <Page>
            <Topo>
                <Logo/>
                <div>
                    <RedirectButtons/>
                </div>
            </Topo>
            <Corpo>
                <div>
                <Charts/>
                </div>
            </Corpo>

        </Page>
        </>
    )
}

const Topo = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    div{
        width: 100%;
        height: 70%;
        display: flex;
        border-top: 0.5px solid #f9f9f9;
        border-bottom: 0.5px solid #f9f9f9;
    }
`
const Corpo = styled.div`
    width: 100vw;
    height: 75vh;
    bottom: 0px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row ;
    background-color: #f9f9f9;

    div:first-child {
        width: 80vw;
        height: 75vh;
        bottom: 0px;
        border: solid 1px #f9f9f9;
        border-radius: 10PX;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row ;
        background-color: #e4e4e5;
        
    }
    
    
`
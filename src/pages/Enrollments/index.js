import styled from "styled-components";
import Page from "../../components/Page";
import RedirectButtons from "../../components/buttons";
import Logo from "../../components/logo";
import { useState } from "react";

export default function Enrollment(){
    
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
    width: 100%;
    height: 400px;
    background-color: green;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        width: 300px;
        height: 300px;
        display: flex;
        background-color: blue;
        align-items: center;
        justify-content:center;
        position: relative;
    }
`
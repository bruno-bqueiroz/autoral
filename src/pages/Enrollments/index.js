import styled from "styled-components";
import Page from "../../components/Page";
import RedirectButtons from "../../components/buttons";
import Logo from "../../components/logo";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Enrollment(){
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
        <Page>
            <Topo>
                <Logo/>
                <div>
                    <RedirectButtons/>
                </div>
            </Topo>
            
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                
            

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
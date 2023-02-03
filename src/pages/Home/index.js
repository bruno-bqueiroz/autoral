import styled from "styled-components";
import Page from "../../components/Page";
import RedirectButtons from "../../components/buttons";
import Logo from "../../components/logo";
import ResumoDiario from "../../components/extrato";
import Sidebar from "../../components/sidebar";
import { ToastContainer } from 'react-toastify';


export default function Home(){
    return (
        <>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
        <Page>
            <Topo>
                <Logo/>
                <div>
                    <RedirectButtons/>
                </div>
            </Topo>
            <Corpo>
                <ResumoDiario/>
                <Sidebar/>
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
    justify-content: flex-start;
    align-items: center;
    flex-direction: row ;

    div:first-child {
        height: 100%;
        width: 65%;
        border-right: 0.5px solid #f9f9f9;
    }
    div:last-child {
        height: 100%;
        width: 32%;
        border-right: 0.5px solid #f9f9f9;
        
    }
    
`
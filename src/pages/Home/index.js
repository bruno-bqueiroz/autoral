import styled from "styled-components";
import Page from "../../components/Page";
import Logo from "../../components/logo";
import ResumoDiario from "../../components/extrato";
import Sidebar from "../../components/sidebar";
import { ToastContainer } from 'react-toastify';
import Topo from "../../components/Topo";
import Corpo from "../../components/Corpo";

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
            </Topo>
            <Corpo>
                <ResumoDiario/>
                <Sidebar/>
            </Corpo>

        </Page>
        </>
    )
}

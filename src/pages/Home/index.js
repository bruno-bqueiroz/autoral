import Page from "../../components/Page";
import Logo from "../../components/logo";
import ResumoDiario from "../../components/extrato";
import Sidebar from "../../components/sidebar";
import { ToastContainer } from 'react-toastify';
import Topo from "../../components/Topo";
import Corpo from "../../components/Corpo";
import useToken from "../../hook/useToken";

export default function Home(){
    const token = useToken();
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
                <ResumoDiario token = {token} />
                <Sidebar token = {token} />
            </Corpo>
        </Page>
        </>
    )
}

import Page from "../../components/Page";
import Logo from "../../components/logo";
import Topo from "../../components/Topo";
import Corpo from "../../components/Corpo";
import FormEnroll from "../../components/enroll";
import { ToastContainer } from 'react-toastify';
import useToken from "../../hook/useToken";

export default function Enrollment(){
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
                <FormEnroll token = {token}/>
            </Corpo>
        </Page>
        </>
    )
}


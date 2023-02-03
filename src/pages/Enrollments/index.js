import Page from "../../components/Page";
import Logo from "../../components/logo";
import Topo from "../../components/Topo";
import Corpo from "../../components/Corpo";
import FormEnroll from "../../components/enroll";

export default function Enrollment(){
    
    return (
        <>
        <Page>
            <Topo>
                <Logo/>
            </Topo>
            <Corpo>
                <FormEnroll/>
            </Corpo>
        </Page>
        </>
    )
}


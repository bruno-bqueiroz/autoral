import Page from "../../components/Page";
import Logo from "../../components/logo";
import { Charts } from "../../components/Grafico1";
import Topo from "../../components/Topo";
import Corpo from "../../components/Corpo";
import useToken from "../../hook/useToken";

export default function MonthlyStatement(){
    const token = useToken();
    console.log(token);
    return (
        <>
        <Page>
            <Topo>
                <Logo/>
            </Topo>
            <Corpo> 
                <div>
                <Charts/>
                </div>
                <div>
                    
                </div>
                
            </Corpo>

        </Page>
        </>
    )
}

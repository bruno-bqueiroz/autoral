import styled from "styled-components";
import Page from "../../components/Page";
import RedirectButtons from "../../components/buttons";
import Logo from "../../components/logo";
import { Charts } from "../../components/Grafico1";
import Topo from "../../components/Topo";
import Corpo from "../../components/Corpo";

export default function MonthlyStatement(){
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

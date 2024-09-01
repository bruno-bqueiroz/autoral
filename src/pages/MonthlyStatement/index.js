import styled from "styled-components";
import { useState, useEffect } from "react";
import Page from "../../components/Page";
import RedirectButtons from "../../components/buttons";
import Logo from "../../components/logo";
import Topo from "../../components/Topo";
import Corpo from "../../components/Corpo";

export default function MonthlyStatement(){
    const [dados, setDados] = useState([]);

    useEffect(() => {
        const fetchDados = async () => {
            // Simulação de uma requisição a uma API
            // Descomente se quiser usar axios
            // const response = await axios.get('/api/financeiro');
            // setDados(response.data);

            // Dados genéricos para simulação
            const dadosSimulados = [
                { id: 1, tipo: 1, descricao: 'Compra de material', data: '2024-07-27 10:00:00', valor: 100.00, user_id: 1 },
                { id: 2, tipo: 2, descricao: 'Pagamento de serviços', data: '2024-07-28 11:30:00', valor: 200.50, user_id: 2 },
                { id: 3, tipo: 3, descricao: 'Assinatura de software', data: '2024-07-29 09:15:00', valor: 50.75, user_id: 1 },
            ];

            setDados(dadosSimulados);
        };

        fetchDados();
    }, []);


    
    return (
        <Page>
            <Topo>
                <Logo/>
            </Topo>
            <Corpo> 
            <div>
            <h1>Financeiro</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tipo</th>
                        <th>Descrição</th>
                        <th>Data</th>
                        <th>Valor</th>
                        <th>ID do Usuário</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map(dado => (
                        <tr key={dado.id}>
                            <td>{dado.id}</td>
                            <td>{dado.tipo}</td>
                            <td>{dado.descricao}</td>
                            <td>{dado.data}</td>
                            <td>{dado.valor.toFixed(2)}</td>
                            <td>{dado.user_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
                
            </Corpo>

        </Page>
    )

}

import Page from "../../components/Page";
import { ToastContainer } from 'react-toastify';
import Corpo from "../../components/Corpo";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signIn } from "../../services/signIn";

export default function SigIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function submit(event) {
        event.preventDefault();
    
        try {
          const userData = await signIn(email, password);
          console.log(userData);
          
          toast('Login realizado com sucesso!');
          navigate('/dashboard');
        } catch (err) {
          toast('Não foi possível fazer o login!');
        }
      } 
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
            
            <Corpo>
                <Teste>
                <b>Entrar</b>
                <form onSubmit={submit}>
                    <input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
                    <input label="Senha" type="password" fullWidth value={password}     onChange={e => setPassword(e.target.value)} />
                    <button type="submit">OK</button>
                </form>
                </Teste>
            </Corpo>
        </Page>
        </>
    )
}

const Teste = styled.div`
    background-color: #334c57;
    padding-top: 10vh;
    border-radius: 20px;
    b{
        color: #e4e4e5;
        font-size: 2vw;
    }
    
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        input{
            width: 80%;
            height: 50px;
            margin: 20px 0;
            border: solid none;
            border: none;
            border-radius: 10px;
        }
        input:focus{
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
        }
        button{
            width: 60%;
            height: 45px;
            margin: 30px 0;
            background-color: #6780f7;
            border: solid #6780f7;
            border-radius: 10px;
            font-size: 2vw;
            font-weight: 700;
            color: #e4e4e5;
        }
        button:hover{
            cursor: pointer;
        }
    }
    
`
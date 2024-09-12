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
          localStorage.setItem("token", userData.token);
          toast('Login realizado com sucesso!!!');
          navigate('/home');
        } catch (err) {
          toast('Não foi possível fazer o login!');
        }
      } 
      function redirect(){
        navigate('/signUp');
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
                <Form>
                <b>Control 4 Driver</b>
                <form onSubmit={submit}>
                    <input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
                    <input label="Senha" type="password" fullWidth value={password}     onChange={e => setPassword(e.target.value)} />
                    <button type="submit">Entrar</button>
                    <label>Ainda não tem uma conta? </label>
                </form>
                <button onClick={redirect}>Inscrever-se</button>
                </Form>
            </Corpo>
        </Page>
        </>
    )
}

const Form = styled.div`
    background-color: #334c57;
    padding-top: 4vh;
    border-radius: 20px;
    b{
        font-size: 2vw;
        color: black;
        font-weight: 800;
    }
    
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        input:first-child{
            margin-top: 4vh;
        }
        input{
            width: 80%;
            height: 50px;
            margin: 3vh 0;
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
            margin: 2vh 0;
            background-color: #6780f7;
            border: solid #6780f7;
            border-radius: 10px;
            font-size: 2vw;
            font-weight: 700;
            color: #e4e4e5;
        }
        label{
            font-size: 1.5vw;
            margin-top: 3vh;
            color: #e4e4e5
        }
        button:hover{
            cursor: pointer;
        }
    }
    button{
            width: 30%;
            height: 45px;
            margin: 2vh 0;
            background-color: #6780f7;
            border: solid #6780f7;
            border-radius: 10px;
            font-size: 1.5vw;
            font-weight: 700;
            color: #e4e4e5;
        }
        
        button:hover{
            cursor: pointer;
        }
    
`
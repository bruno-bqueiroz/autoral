import Page from "../../components/Page";
import { ToastContainer } from 'react-toastify';
import Corpo from "../../components/Corpo";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signUp } from "../../services/signUp";

export default function SigIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    async function submit(event) {
        event.preventDefault();
        if(password !== confirmPassword) {
            toast('As senhas não coincidem!');
            return
        }
        try {
          const userData = await signUp(email, password);
          console.log(userData);
          toast('Login realizado com sucesso!!!');
          navigate('/home');
        } catch (err) {
            console.log(err)
          toast('Não foi possível fazer o login!');
        }
      } 
    function redirect(){
        navigate('/');
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
                    <input label="Senha" type="password" fullWidth value={confirmPassword}     onChange={e => setConfirmPassword(e.target.value)} />
                    <button type="submit">Inscrever-se</button>
                    <label>Ja tem uma conta? </label>
                </form>
                <button onClick={redirect}>Entrar</button>
                </Form>

            </Corpo>
        </Page>
        </>
    )
}

const Form = styled.div`
    background-color: #334c57;
    
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
            margin: 2vh 0;
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
            margin-top: 2vh;
            color: #e4e4e5
        }
        button:hover{
            cursor: pointer;
        }
    }
    button{
            width: 40%;
            height: 45px;
            margin: 2vh 0;
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
    
`
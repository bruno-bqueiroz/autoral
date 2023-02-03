import styled from "styled-components";
import { useState } from "react";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormEnroll(){
    const [form, setForm] = useState([]);
    const [data, setData] = useState('');
    const notify = () => toast("Sucesso!!!");
    const errorNotify = () => toast("Erro ao Salvar!");
    console.log(form)

      function handleForm (e) {
        if(form.find(e.target.name)){
            
            setForm(
                form.e.target.name = e.target.value)
        }
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        }) 
      }
      async function postEnroll(){
        try {
        const datas = await postEnroll(form);
        setData(datas);
        notify();
        } catch (error) {
            errorNotify();
            console.log(error);
        }
        
      }
      
    return(
        <>
            <Enroll>
                <h1>Cadastro pessoal</h1>
                <form>
                    <b>Nome:</b>
                    <input type="text" name="name" onChange={handleForm} value={form.description}  placeholder="Digite seu nome" required/>
                    <b>CPF:</b>
                    <input type="text" name="cpf" onChange={handleForm} value={form.description}  placeholder="Digite seu CPF" required/>
                    <b>Cidade:</b>
                    <input type="text" name="city" onChange={handleForm} value={form.description}  placeholder="Digite a Cidade onde trabalha" required/>
                    <b>Estado:</b>
                    <input type="text" name="state" onChange={handleForm} value={form.description}  placeholder="Em qual estado fica essa cidade" required/>
                </form>
            </Enroll>
            <Pipe></Pipe>
            <Vehicle>
                <h1>Cadastro do Veículo</h1>
                <form >
                    <b>Marca:</b>
                    <input type="text" name="marca" onChange={handleForm} value={form.description}  placeholder="Digite a Marca do Veículo" required/>
                    <b>Modelo:</b>
                    <input type="text" name="modelo" onChange={handleForm} value={form.description}  placeholder="Digite o Modelo do Veículo" required/>
                    <b>Ano:</b>
                    <input type="text" name="ano" onChange={handleForm} value={form.description}  placeholder="Digite o ano de fabricação do veículo" required/>
                </form>
                <input onClick={postEnroll} type="submit" value="Enviar" className="submit"/>
                
            </Vehicle>
        </>
    )
}

const Enroll = styled.div`
    h1{
        font-size: 2vw;
    }
    b{
        font-size: 1.5vw;
        margin-top: 3vh;
        margin-bottom: 3px;
        padding-right: 30vw;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        input{
            width: 60%;
            height: 8vh;
            margin-bottom: 3vh;
            border: solid 0.1px #a6afaa;
            border-radius: 5px;
        }
    }
`
const Vehicle = styled.div`
    h1{
        font-size: 2vw;
    }
    b{
        font-size: 1.5vw;
        margin-top: 4vh;
        padding-right: 18vw;
        margin-bottom: 3px;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        input{
            width: 60%;
            height: 8vh;
            margin-bottom: 4vh;
            border: solid 1px #a6afaa;
            border-radius: 5px;
        }
    }
    .submit{
        width: 15vw;
        height: 8vh;
        font-size: 1.4vw;
        font-weight: 700;
        background-color: #FFFFFF;
        border: solid 1px #FFFFFF;
        border-radius: 10px;
    }
    .submit:hover{
        cursor: pointer;
        background-color:#6780f7;
        border: #6780f7;
    }
` 
const Pipe = styled.div`
    height: 45vh;
    border: solid 0.1px #e4e4e5;
`
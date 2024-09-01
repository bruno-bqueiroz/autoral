import styled from "styled-components";
import { useState } from "react";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postEnroll, getEnroll } from "../../services/enroll";
import { useEffect } from "react";

export default function FormEnroll(){
    const [form, setForm] = useState({
        ano: "",
        city: "",
        cpf: "",
        marca: "",
        modelo: "",
        name: "",
        state: "",
        meta: "",
        });
        async function get(){
            try {
                const dataEnroll = await getEnroll();
                console.log(dataEnroll);
                setForm({
                ano: dataEnroll[2].ano,
                city: dataEnroll[0].city,
                cpf: dataEnroll[0].cpf,
                marca: dataEnroll[2].marca,
                modelo: dataEnroll[2].modelo,
                name: dataEnroll[0].name,
                state: dataEnroll[0].state,
                meta: dataEnroll[1].meta?? 2 ,
                }); 
            } catch (error) {
                console.log(error)
            }
        }
        useEffect(() => {
            console. log("Isso será executado uma vez!");
            get();
            }, []);
    
    const notify = () => toast("Sucesso!!!");
    const errorNotify = () => toast("Erro ao Salvar!");
    console.log(form)

      function handleForm (e) {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        })
      }
      async function postWithEnroll(){
        try {
        const datas = await postEnroll(form);
        
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
                    <input type="text" name="name" onChange={handleForm} value={form.name}  placeholder="Digite seu nome" required/>
                    <b>CPF:</b>
                    <input type="text" name="cpf" onChange={handleForm} value={form.cpf}  placeholder="Digite seu CPF" required/>
                    <b>Cidade:</b>
                    <input type="text" name="city" onChange={handleForm} value={form.city}  placeholder="Digite a Cidade onde trabalha" required/>
                    <b>Estado:</b>
                    <input type="text" name="state" onChange={handleForm} value={form.state}  placeholder="Em qual estado fica essa cidade" required/>
                    <b>Meta mensal:</b>
                    <input type="text" name="meta" onChange={handleForm} value={form.meta}  placeholder="Qual sua meta mensal?"/>
                </form>
            </Enroll>
            <Pipe></Pipe>
            <Vehicle>
                <h1>Cadastro do Veículo</h1>
                
                <form >
                    <b>Marca:</b>
                    <input type="text" name="marca" onChange={handleForm} value={form.marca}  placeholder="Digite a Marca do Veículo" required/>
                    <b>Modelo:</b>
                    <input type="text" name="modelo" onChange={handleForm} value={form.modelo}  placeholder="Digite o Modelo do Veículo" required/>
                    <b>Ano:</b>
                    <input type="text" name="ano" onChange={handleForm} value={form.ano}  placeholder="Digite o ano de fabricação do veículo" required/>
                </form>
                
                <input onClick={postWithEnroll} type={"submit"} value="Enviar" className="submit"/>
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
            height: 6vh;
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
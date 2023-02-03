import React from "react";
import { useState } from "react";
import Modal from 'react-modal';
import styled from "styled-components";
import FormModal from "./Form";


export default function ModalStyle({setDate, modalIsOpen, setIsOpen, setData}){

       function closeModal() {
         setIsOpen(false);
       }
   
    return(
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
        className="Modal"
    >
        <FormModal setIsOpen = {setIsOpen} setData = {setData} setDate = {setDate} />
        
    </Modal>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    button{
        margin-top: 1vh;
        margin-left: 12vw;
        margin-right: 1vw;
        background-color: #e0c5ff;
        border: solid 1px #e0c5ff;
        border-radius: 3px;
    }
    div{
        margin: 10px;
        padding: 3px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        input{
            height: 35px;
            width: 100px;
            border: solid 1px #e0c5ff;
            border-radius: 4px;
        }
    }
`
import styled from "styled-components";
import { getDiaryBydate } from "../../services/diary";
import { getGoal } from "../../services/goals";
import { useEffect } from "react";

export default function Meta({ date, data, setDate, setData }) {

  
    async function diary(newDate) {
      try {

        const metas = await getGoal();
        
        
        setData(metas);
        

        const datas = await getDiaryBydate(newDate);
        
        setData(datas);
      } catch (error) {
        return error;
      }
    }
    
    useEffect(() => {
        diary(date);
      }, [date]);

  
    return (
      <Container>
        <ul>
          <p>Meta do Mês</p>
          <b>R$ {data.meta? data.meta : 0}</b>
        </ul>
        <ul>
          <p>Faturamento</p>
          <b>R$ {data.entrada? data.entrada : 0}</b>
        </ul>
        <ul>
          <p>Falta para bater a meta</p>
          <b>R$ {data.entrada && data.meta? data.meta -  data.entrada: 0}</b>
        </ul>
        <ul>
          <form
            onInputCapture={() => diary(date)} // Passa o valor atualizado
          >
            <input
              type="date"
              value={date}
              placeholder={date}
              required
              onChange={(e) => setDate(e.target.value)}
            />
          </form>
        </ul>
      </Container>
    );
  }
  

const Container = styled.span `
    width: 100%;
    height: 15%;
    font-size: 1.5vw;
    display: flex;
    color: #14121F;
    
    align-items: center;
    justify-content: center;
    ul{
        margin: 2vh 15px;
    }
    p{
        margin: 5px 0 0 0;
        
        font-weight: 500;
    }
    ul:last-child{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2vh 0;
        form{
            input{
                background-color: #e0c5ff;
                color: #FFFFFF;
            }
            input:last-child{
                background-color: #14121F;
                color: #FFFFFF;
                border: solid 1px #FFFFFF;
                border-radius: 4px;
                margin-left: 4px;
            }
        }
    }    
`
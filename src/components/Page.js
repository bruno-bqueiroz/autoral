import styled from 'styled-components';

export default styled.div`
  background-color: #a6afaa;
  margin: 0;
  height: 99vh;
  width: 100vw;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 48px;
  position: absolute;

  

  & > * {
    text-align: center;
  }
 

  @media (max-width: 600px) {
    padding: 0;
  }
`;

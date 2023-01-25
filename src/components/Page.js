import styled from 'styled-components';

export default styled.div`
  background-color: #e4e4e5;
  
  min-height: 100vh;
  width: 100vw;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 48px;

  

  & > * {
    text-align: center;
  }
 

  @media (max-width: 600px) {
    padding: 0;
  }
`;

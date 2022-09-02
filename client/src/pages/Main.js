import React from 'react';
import styled from 'styled-components';

function Main() {
  return (
    <MainContainer>
      <MainWrapper>
        <div>
          <p>Welcome!</p>
        </div>
      </MainWrapper>
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #cefff4;
`;

const MainWrapper = styled.div`
  width: 450px;
  height: 600px;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  box-shadow: inset -1.3px -1.3px 5px 1.3px rgba(0, 0, 0, 0.1);
  font-size: 26px;
  font-weight: bold;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
  }
`;

import React from "react";
import styled from "styled-components";

// Styled-components로 스타일 정의
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
  color: #333;
`;

const Header = styled.header`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <AppContainer>
      <Header>Welcome to AjaeChelin</Header>
      <Description>Explore AI-powered dad jokes and much more!</Description>
      <Button onClick={handleClick}>Get Started</Button>
    </AppContainer>
  );
}

export default App;

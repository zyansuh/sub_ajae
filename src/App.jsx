import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal"; // react-modal 가져오기

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

// react-modal 초기화 (필수)
Modal.setAppElement("#root");

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <AppContainer>
      <Header>Welcome to AjaeChelin</Header>
      <Description>Explore AI-powered dad jokes and much more!</Description>
      <Button onClick={openModal}>Get Started</Button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          content: {
            color: "#333",
            padding: "2rem",
            borderRadius: "10px",
            width: "400px",
            margin: "auto",
            textAlign: "center",
          },
        }}
      >
        <h1>Modal Title</h1>
        <p>This is a modal content!</p>
        <Button onClick={closeModal}>Close Modal</Button>
      </Modal>
    </AppContainer>
  );
}

export default App;

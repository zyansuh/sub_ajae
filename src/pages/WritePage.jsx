import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";

const WriteContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.75rem;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.75rem;
  width: 300px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function WritePage() {
  const [form, setForm] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit joke:", form);
  };

  return (
    <div>
      <Header />
      <WriteContainer>
        <h2>개그 작성 페이지</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="title"
            placeholder="제목을 입력하세요"
            value={form.title}
            onChange={handleChange}
          />
          <TextArea
            name="content"
            placeholder="내용을 입력하세요"
            value={form.content}
            onChange={handleChange}
          />
          <Button type="submit">제출하기</Button>
        </form>
      </WriteContainer>
      <Footer />
    </div>
  );
}

export default WritePage;

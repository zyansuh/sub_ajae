import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Input = styled.input`
  margin: 0.5rem 0;
  padding: 0.75rem;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  margin: 1rem 0;
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

function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", form);
  };

  return (
    <div>
      <Header />
      <LoginContainer>
        <h2>로그인 페이지</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            placeholder="아이디를 입력해주세요"
            value={form.username}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={form.password}
            onChange={handleChange}
          />
          <Button type="submit">로그인</Button>
        </form>
      </LoginContainer>
      <Footer />
    </div>
  );
}

export default LoginPage;

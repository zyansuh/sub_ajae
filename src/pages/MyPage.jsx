import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";

const MyPageContainer = styled.div`
  padding: 2rem;
`;

const UserInfo = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

function MyPage() {
  const userJokes = [
    { id: 1, title: "왕이 넘어지면?", date: "2024-11-16" },
    { id: 2, title: "참새가 힘들면?", date: "2024-11-15" },
  ];

  return (
    <div>
      <Header />
      <MyPageContainer>
        <UserInfo>
          <h2>사용자 정보</h2>
          <p>아이디: ajaeMaster</p>
          <p>이메일: ajae@example.com</p>
        </UserInfo>
        <h3>내가 작성한 개그</h3>
        <ul>
          {userJokes.map((joke) => (
            <li key={joke.id}>
              {joke.title} - {joke.date}
            </li>
          ))}
        </ul>
      </MyPageContainer>
      <Footer />
    </div>
  );
}

export default MyPage;

import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";

const DetailContainer = styled.div`
  padding: 2rem;
`;

const JokeDetails = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Comment = styled.div`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

function DetailPage() {
  const comments = [
    { id: 1, author: "서지안", text: "재미있어요!" },
    { id: 2, author: "조동희", text: "조금 더 개선해보세요." },
  ];

  return (
    <div>
      <Header />
      <DetailContainer>
        <JokeDetails>
          <h3>왕이 넘어지면?</h3>
          <p>작성자: 정은혜</p>
          <p>작성일: 2024-11-16</p>
        </JokeDetails>
        <h4>댓글</h4>
        {comments.map((comment) => (
          <Comment key={comment.id}>
            <p><strong>{comment.author}:</strong> {comment.text}</p>
          </Comment>
        ))}
      </DetailContainer>
      <Footer />
    </div>
  );
}

export default DetailPage;

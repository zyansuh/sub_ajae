//AI 추천 컴포넌트 스타일 정의

import styled from "styled-components";

export const RecommendationContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

export const Button = styled.button`
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

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const ResultText = styled.p`
  margin-top: 1.5rem;
  font-size: 1.25rem;
  color: #333;
  font-style: italic;
`;

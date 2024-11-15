//개그 카드 스타일 컴포넌트

import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  width: 250px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const Body = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

export const Author = styled.p`
  font-size: 0.875rem;
  color: #999;
  margin-bottom: 1rem;
`;

export const ActionButton = styled.button`
  padding: 0.5rem;
  font-size: 0.875rem;
  color: #007bff;
  background-color: transparent;
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

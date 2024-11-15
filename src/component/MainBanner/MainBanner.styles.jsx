//Main Banner스타일 정의

import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background-color: #e9ecef;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

export const ActionButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

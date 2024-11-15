//푸터 관련해서 스타일 컴포넌트 작성

import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa;
`;

export const FooterText = styled.p`
  font-size: 0.875rem;
  color: #666;
`;

export const ActionButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
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

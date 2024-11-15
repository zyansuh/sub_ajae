//헤더 관련 스타일 컴포넌트 만드는곳

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: #333;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: #0056b3;
  }
`;

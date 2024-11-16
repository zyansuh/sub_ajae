//헤더 컴포넌트

// 임시적으로 미리 코딩을 해놨습니다. 수정해야해요...........
// 금요일에 미리미리 해놓으려고 하다가 그냥 CRUD 필요해서 만드능거에요......... 주석 필요하면 말씀주세요 사랑해요 여러분

import React from "react";
import { HeaderContainer, Logo, Nav, Button } from "./Header.styles";

function Header() {
  return (
    <HeaderContainer>
      <Logo>아재슐랭</Logo>
      <Nav>
        <Button>소개</Button>
        <Button>목록</Button>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;

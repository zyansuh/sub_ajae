// 메인 배너 컴포넌트
// 임시적으로 미리 코딩을 해놨습니다. 수정해야해요...........
// 금요일에 미리미리 해놓으려고 하다가 그냥 CRUD 필요해서 만드능거에요......... 주석 필요하면 말씀주세요 사랑해요 여러분

import React from 'react';
import { BannerContainer, Title, Subtitle, ActionButton } from './MainBanner.styles';

function MainBanner() {
  return (
    <BannerContainer>
      <Title>아재슐랭</Title>
      <Subtitle>AI 추천! 오늘의 아재개그</Subtitle>
      <ActionButton>오늘의 ai 추천개그</ActionButton>
    </BannerContainer>
  );
}

export default MainBanner;

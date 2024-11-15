// 개별 개그 카드 컴포넌트
// 임시적으로 미리 코딩을 해놨습니다. 수정해야해요...........
// 금요일에 미리미리 해놓으려고 하다가 그냥 CRUD 필요해서 만드능거에요......... 주석 필요하면 말씀주세요 사랑해요 여러분

import React from 'react';
import { Card, Title, Body, Author, ActionButton } from './JokeCard.styles';

function JokeCard({ joke }) {
  return (
    <Card>
      <Title>{joke.title}</Title>
      <Body>{joke.body}</Body>
      <Author>작성자: {joke.author}</Author>
      <ActionButton>Button</ActionButton>
    </Card>
  );
}

export default JokeCard;

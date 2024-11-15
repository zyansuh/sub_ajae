//Pages : 페이지 단위 컴포넌트 폴더
// 홈페이지 구성
//assets  폴더 안에는 로고 관련 이미지 파일 예시 올려놓기
//app.css => 전체 앱스타일 생성


// 임시적으로 미리 코딩을 해놨습니다. 수정해야해요...........
// 금요일에 미리미리 해놓으려고 하다가 그냥 CRUD 필요해서 만드능거에요......... 주석 필요하면 말씀주세요 사랑해요 여러분

import React from 'react';
import Header from '../components/Header/Header';
import MainBanner from '../components/MainBanner/MainBanner';
import JokesList from '../components/JokesList/JokesList';
import Footer from '../components/Footer/Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <MainBanner />
      <JokesList />
      <Footer />
    </div>
  );
}

export default HomePage;

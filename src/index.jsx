// ReactDom을 이용해 APP을 렌더링 하는 진입점

// 임시적으로 미리 코딩을 해놨습니다. 수정해야해요...........
// 금요일에 미리미리 해놓으려고 하다가 그냥 CRUD 필요해서 만드능거에요......... 주석 필요하면 말씀주세요 사랑해요 여러분

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // 전역 스타일 가져오기

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
